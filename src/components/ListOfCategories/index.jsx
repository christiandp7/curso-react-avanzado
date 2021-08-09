import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";

import { List, Item } from "./styles";

const useCategoriesData = (params) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(function () {
        setLoading(true);
        fetch("http://localhost:3500/categories")
            .then((res) => res.json())
            .then((response) => {
                setCategories(response);
                setLoading(false);
            });
    }, []);

    return { categories, loading };
};

export const ListOfCategories = () => {
    const [showFixed, setShowFixed] = useState(false);

    const { categories, loading } = useCategoriesData();

    useEffect(
        function () {
            const onScroll = (e) => {
                const newShowFixed = window.scrollY > 200;
                showFixed !== newShowFixed && setShowFixed(newShowFixed);
            };

            document.addEventListener("scroll", onScroll);

            return () => document.removeEventListener("scroll", onScroll);
        },
        [showFixed]
    );

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {categories.map((category) => (
                <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`} />
                </Item>
            ))}
        </List>
    );

    if (loading) {
        return "loading...";
    }

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );
};
