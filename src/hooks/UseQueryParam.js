import { useLocation } from "react-router";


export const UseQueryParam = () => {
    return new URLSearchParams(useLocation().search)
};