import HomePage from "../container/homePage/HomePage";
import PeoplePage from "../container/peoplePage/PeoplePage";
import SpeciesPage from "../container/speciesPage/SpeciesPage";
import StartShipsPage from "../container/startShipsPage/StartShipsPage";
import VehiclesPage from "../container/vehiclesPage";    
import NotFoundPage from "../container/notFoundPage";
import PersonPage from "../components/personPage";
import FavoritesPage from "../container/favoritesPage";



export const routesConfig = [
    {
        path: "/",
        element: <HomePage /> 
    },
    {
        path: "/people",      
        element: <PeoplePage />
    },
    {
        path: "/people/:id",      
        element: <PersonPage />
    },
    {
        path: "/species",      
        element: <SpeciesPage />
    },
    {
        path: "/starships",      
        element: <StartShipsPage />
    } ,
    {
        path: "/vehicles",      
        element: <VehiclesPage />
    } ,   
    {
        path: "/not-found",      
        element: <NotFoundPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/favorites",
        element: <FavoritesPage />
    }             
]; 

