import { useRoute, RouteProp } from '@react-navigation/native';
import { IArena } from '../../interfaces/IArena';
import { Text, View, StyleSheet, Image } from "react-native";
import * as C from './styles'
import React, { useContext, useEffect, useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { theme } from "../../styles/theme";
import { Entypo } from '@expo/vector-icons';
import { Api, token } from '../../services/api';
import { IArenaResponse, IArenaVideo } from '../../interfaces/IVideoPlayer';
import { FlashList } from '@shopify/flash-list';
import { FavoriteContext } from '../../contexts/FavoritesContext';

type SearchScreenParams = {
  nomArena: IArena['NomArena'];
};


export function Search() {
  const route = useRoute<RouteProp<Record<string, SearchScreenParams>, string>>();
  const responseEmpty = {
    "DatHora": "",
    "DatProcessado": "",
    "DatUpload": "",
    "Frame": "",
    "HorarioVideoFrame": "",
    "NomArena": "",
    "NomExibicao": "",
    "NomQuadra": "",
    "play": ""
  }
  const [response, setResponse] = useState<IArenaVideo[]>([responseEmpty])
  const nomArena = route.params?.nomArena;
  const { favorites, setFavorites } = useContext(FavoriteContext)

  console.log(response[0])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.post<IArenaResponse>(
          "/",
          {
            Consulta: "SelVideosGamer",
            Parametros: `'2023-07-08', '2023-07-08', '${nomArena}'`,
            Tipo: "J"
          }
          ,
          {
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
          }
        );
        setResponse(response.data.result);

      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    fetchData()
  }, [nomArena, favorites])


  interface IVideoPlayer {
    id: number,
    name: string,
    title: string,
    date: string
    local: string
  }

  const addVideoToFavorite = (video: IArenaVideo) => {
    const isAlreadyFavorite = favorites.some((favVideo) => favVideo.DatProcessado === video.play);
    console.log(true)
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, video]);
    }
  };
  const removeVideoFromFavorite = (video: IArenaVideo) => {
    setFavorites(favorites.filter((videoFavorite) => video.DatProcessado !== videoFavorite.DatProcessado))
    console.log(false)

  }
  const video = useRef(null);
  const [status, setStatus] = useState({});

  function areObjectsEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        return false;
      }
    }

    return true;
  }
  return (
    <>
      {
        nomArena && !areObjectsEqual(response[0], responseEmpty) ? (
          <C.Container>
            <FlashList
              data={response}
              keyExtractor={(item) => String(item.HorarioVideoFrame)}
              estimatedItemSize={1}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                const isFavorite = favorites.some((favVideo) => favVideo.play === item.play);
                return (
                  <C.Content>

<View style={{ width: '60%', aspectRatio: 16/10, height: 200, backgroundColor:'#ccc'}}>
  <Image
    source={{ uri: item.Frame }}
    style={{ width: "100%", height: "100%" }}  // "100%" em relação à largura do componente pai
    resizeMode="contain"
  />
</View>
                    <C.Description>
                      <View>
                        <Text style={styles.local}>{item.NomExibicao}</Text>
                        <Text style={styles.local}>{item.DatHora}</Text>
                      </View>
                      <C.Favorite onPress={() => isFavorite ? removeVideoFromFavorite(item) : addVideoToFavorite(item)}>
                        {
                          isFavorite ?
                            <Entypo name="heart" size={24} color={theme.colors.green_700} />
                            :
                            <Entypo name="heart-outlined" size={24} color={theme.colors.green_700} />
                        }
                      </C.Favorite>
                    </C.Description>
                  </C.Content>
                )
              }}
            />
          </C.Container>
        ) : (

          <View style={styles.Container}>
            <Text style={styles.text}>
              Selecione uma quadra que tenha videos
            </Text>
          </View>

        )
      }
    </>
  );
}
const styles = StyleSheet.create({
  local: {
    fontSize: 13,
    color: theme.colors.gray_20,
    fontWeight: 'bold',
    maxWidth: 300

  },
  title: {

    fontSize: 20,
    color: theme.colors.green_700,
    fontWeight: 'bold'
  },
  video: {
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray_25
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.gray_20
  }
});