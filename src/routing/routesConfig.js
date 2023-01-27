import HomePage from "../container/homePage/HomePage";
import PeoplePage from "../container/peoplePage/PeoplePage";

export const routesConfig = [
    {
        path: "/",
        element: <HomePage /> 
    },
    {
        path: "/people",      
        element: <PeoplePage />
    }    
]; 