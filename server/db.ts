function getRandom(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  return `${getRandom(255).toString(16).padStart(2, '0')}${getRandom(255)
    .toString(16)
    .padStart(2, '0')}${getRandom(255).toString(16).padStart(2, '0')}`;
}

export class PaletteDB {
  static instance: PaletteDB;

  private data = new Array(100).fill(1).map((_, index) => {
    return {
      id: index + 1,
      colors: [
        getRandomColor().toUpperCase(),
        getRandomColor().toUpperCase(),
        getRandomColor().toUpperCase(),
        getRandomColor().toUpperCase(),
      ],
      isLike: getRandom(5) === 0,
      likeCount: getRandom(2000),
    };
  });

  constructor() {
    if (PaletteDB.instance) return PaletteDB.instance;

    PaletteDB.instance = this;
  }

  like(id: number) {
    const isLiked = this.data.find((it) => it.id === id)!.isLike;

    this.data = this.data.map((it) =>
      it.id === id
        ? {
            ...it,
            isLike: !isLiked,
            likeCount: isLiked ? it.likeCount - 1 : it.likeCount + 1,
          }
        : it
    );

    return !isLiked;
  }

  getData() {
    return this.data;
  }
}
