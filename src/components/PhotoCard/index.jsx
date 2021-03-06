import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMutationToogleLike } from "../../hooks/useMutationToogleLike";
import { FavButton } from "../FavButton";
import { Link } from "@reach/router";

const DEFAULT_IMAGE =
    "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen();
    const { toggleLike, mutationLoading, mutationError } =
        useMutationToogleLike();

    const handleFavClick = () => {
        toggleLike({
            variables: {
                input: { id },
            },
        });
    };

    return (
        <Article ref={element}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    <FavButton
                        liked={liked}
                        likes={likes}
                        onClick={handleFavClick}
                    />
                </>
            )}
        </Article>
    );
};
