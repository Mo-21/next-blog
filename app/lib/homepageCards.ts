interface Card {
  title: string;
  description: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}

export const cards: Card[] = [
  {
    title: "Create, Read and Edit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in.",
    img: {
      src: "/writing.jpg",
      width: 240,
      height: 160,
    },
  },
  {
    title: "Modern Editor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec.",
    img: {
      src: "/create-blog-post.jpg",
      width: 240,
      height: 160,
    },
  },
  {
    title: "Access From Anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec. Vel pharetra vel turpis nunc eget lorem dolor.",
    img: {
      src: "/blog-devices.jpg",
      width: 240,
      height: 172.25,
    },
  },
];
