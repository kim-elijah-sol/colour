export type PostCreateRequest = {
  colors: string[];
};

export const postCreate = (body: PostCreateRequest) =>
  fetch('/create', {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json());
