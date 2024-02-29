import {  FlatList, Image, TextInput, } from "react-native";
import * as C from "./styles";
import React, {  useEffect, useState } from "react";
import { theme } from "../../styles/theme";

import { Api, token } from "../../services/api";
import { IApiResponseArena, IArena } from "../../interfaces/IArena";
import { useNavigation } from "@react-navigation/native";

export function Striming() {
  const [response, setResponse] = useState<IApiResponseArena | null>(null);
  const [filteredData, setFilteredData] = useState<IArena[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.post<IApiResponseArena>(
          "/",
          {
            Consulta: "SelArenas",
            Parametros: "",
            Tipo: "J",
          },
          {
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
          }
        );

        setResponse(response.data);
        setFilteredData( response.data.result || [])
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    fetchData();
  }, [token])

  const handleSearch = (text: string) => {
    setSearchTerm(text);
     
  if (response?.result) {
    const filteredNames = response.result.filter(name => name.NomExibicao.includes(text));
    setFilteredData(filteredNames || []);
  }
  };

  return (
    <C.Container>
      <TextInput
        style={{ color: theme.colors.white, height: 40, borderColor: theme.colors.green_700, borderWidth: 1, margin: 10, paddingLeft: 15, borderRadius: 12 }}
        placeholder="Procure a quadra"
        placeholderTextColor={theme.colors.gray_20}
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.NomArena.toString()}
        renderItem={({ item }) => (
          
          <C.Content onPress={() => navigation.navigate('Videos', { nomArena: item.NomArena })}>

            <Image source={{ uri: item.Logo }} style={{ width: 100, height: 100 }} />
            <C.Text>{item.NomExibicao}</C.Text>
          </C.Content >
        )}
      />

    </C.Container>
  );
}


