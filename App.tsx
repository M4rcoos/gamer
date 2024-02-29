import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { StatusBar } from 'expo-status-bar';
import { FavoriteProvider } from "./src/contexts/FavoritesContext";

export default function App() {
  return (
    <NavigationContainer >
      <FavoriteProvider>
      <StatusBar style="light" />
      <Routes />
    </FavoriteProvider>
    </NavigationContainer>

  );
}


