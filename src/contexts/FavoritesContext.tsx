import { createContext, useContext, useState } from 'react';
import { View } from 'react-native';
import { IArenaVideo } from '../interfaces/IVideoPlayer';

interface FavoriteContextProps {
favorites:IArenaVideo[]
setFavorites: React.Dispatch<React.SetStateAction<IArenaVideo[]>>
}
const INITIAL_VALUE_FAVORITES:IArenaVideo[] = []
export const FavoriteContext = createContext<FavoriteContextProps>({
  favorites:[],
  setFavorites:()=>{},
});

export const FavoriteProvider = ({children}: { children: React.ReactNode }) =>{
  const [favorites, setFavorites] = useState<IArenaVideo[]>(INITIAL_VALUE_FAVORITES);
  return (
    <FavoriteContext.Provider value={{favorites,setFavorites}}>
      {children}
    </FavoriteContext.Provider>
  )
}

