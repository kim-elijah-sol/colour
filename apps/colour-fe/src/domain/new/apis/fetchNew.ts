type FetchNewResponseItem = {
  id: number;
  colors: string[];
  isLike: boolean;
  likeCount: number;
};

export const fetchNew = () =>
  fetch('/new').then<FetchNewResponseItem[]>((res) => res.json());
