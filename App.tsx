import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { StatusBar } from 'expo-status-bar';
import { FavoriteProvider } from "./src/contexts/FavoritesContext";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function App() {
  return (
    <NavigationContainer >
      <QueryClientProvider client={queryClient}>

      <FavoriteProvider>
      <StatusBar style="light" />
      <Routes />
    </FavoriteProvider>
    </QueryClientProvider>

    </NavigationContainer>

  );
}


