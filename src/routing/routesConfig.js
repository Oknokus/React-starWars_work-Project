import HomePage from "../container/homePage/HomePage";
import PeoplePage from "../container/peoplePage/PeoplePage";
import SpeciesPage from "../container/speciesPage/SpeciesPage";
import StartShipsPage from "../container/startShipsPage/StartShipsPage";

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
        path: "/species",      
        element: <SpeciesPage />
    } ,
    {
        path: "/starships",      
        element: <StartShipsPage />
    }          
]; 