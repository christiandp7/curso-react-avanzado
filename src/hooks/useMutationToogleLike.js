import { useMutation, gql } from "@apollo/client";
const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;
export const useMutationToogleLike = () => {
  const [toggleLike, { loading: mutationLoading, error: mutationError }] =
    useMutation(MUTATION_LIKE_PHOTO);
  return { toggleLike, mutationLoading, mutationError };
};
