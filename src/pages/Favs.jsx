import React from "react";
import { useGetFavorites } from "../containers/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";

export const Favs = () => {
    const { data, loading, error } = useGetFavorites();
    if (loading) return "loading...";
    if (error) return "Error!";
    const { favs } = data;
    return <ListOfFavs favs={favs} />;
};
