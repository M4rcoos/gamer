import { Button, FlatList, Image, Text, View,StyleSheet } from "react-native";
import * as C from './styles'
import React, { useContext, useEffect, useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { theme } from "../../styles/theme";
import {  Feather, Entypo} from '@expo/vector-icons';
import { IArenaResponse, IArenaVideo,  } from "../../interfaces/IVideoPlayer";
import { FavoriteContext } from "../../contexts/FavoritesContext";
import { useRoute, RouteProp } from '@react-navigation/native';
import { Api, token } from "../../services/api";
import { IArena } from "../../interfaces/IArena";
import { FlashList } from "@shopify/flash-list";

type SearchScreenParams = {
  nomArena: IArena['NomArena'];
};
export function Favorites() {
  const route = useRoute<RouteProp<Record<string, SearchScreenParams>, string>>();
  const {favorites, setFavorites} = useContext(FavoriteContext)
  const [response, setResponse] = useState<IArenaVideo[]>([])
  const nomArena = route.params?.nomArena;

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

 
 
const addVideoToFavorite = (video: IArenaVideo) => {
  const isAlreadyFavorite = favorites.some((favVideo) => favVideo.play === video.play);

  if (!isAlreadyFavorite) {
    setFavorites([...favorites, video]);
  }
};
const removeVideoFromFavorite =(video: IArenaVideo)=>{
  setFavorites(favorites.filter((videoFavorite)=>video.play != videoFavorite.play))
}


const video =useRef(null);
const [status, setStatus] =useState({});
  return (
 <C.Container>
  {
    favorites.length > 0?(
      <FlashList
      data={response}
      keyExtractor={(item) => String(item.play)}
      estimatedItemSize={2}
      renderItem={({ item }) => {
        const isFavorite = favorites.some((favVideo) => favVideo.play === item.play);
        return(
          <C.Content >
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: item.play }}
            focusable={true}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
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
    ): <View style={styles.Container}>
    <Text style={styles.text}>
     Favorite Algum video para ele aparecer aqui ...
    </Text>
  </View>
  
  }
 
    
  
  
 
 </C.Container>
  );
}

const styles = StyleSheet.create({
  local:{
    fontSize:13,
    color:theme.colors.gray_20,
    fontWeight:'bold',
    maxWidth:300
    
  },
 title:{
  
   fontSize:20,
   color:theme.colors.green_700,
   fontWeight:'bold'
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
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.gray_20
  }
});