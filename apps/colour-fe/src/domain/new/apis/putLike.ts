type PutLikeResponse = {
  isLiked: boolean;
};

export const putLike = (id: number) =>
  fetch(`/like/${id}`, {
    method: 'PUT',
  }).then<PutLikeResponse>((res) => res.json());
