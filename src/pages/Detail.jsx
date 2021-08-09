import React from "react";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery.js";

export const Detail = ({ detailId }) => {
    return <PhotoCardWithQuery id={detailId} />;
};
