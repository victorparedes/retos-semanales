import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonDetailPage from './pages/PokemonDetailPage/PokemonDetailPage';
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage";
import LayoutPage from "./pages/LayoutPage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <PokemonListPage />
      },
      {
        path:'pokemon/:pokemonName',
        element: <PokemonDetailPage />,
      },
    ]
  },
])

const App = ()=>{
  return ( <RouterProvider router={router} /> )
}

export default App
