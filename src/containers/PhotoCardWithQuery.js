import React from "react";
import { PhotoCard } from "../components/PhotoCard";

import { gql, useQuery } from "@apollo/client";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  if (loading) return "loading...";
  if (error) return `Error! ${error}`;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};
