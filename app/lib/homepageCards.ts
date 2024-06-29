interface Card {
  title: string;
  description: string;
  img: string;
}

export const cards: Card[] = [
  {
    title: "Create, Read and Edit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in.",
    img: "/writing.jpg",
  },
  {
    title: "Modern Editor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec.",
    img: "/create-blog-post.jpg",
  },
  {
    title: "Access From Anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec. Vel pharetra vel turpis nunc eget lorem dolor.",
    img: "/blog-devices.jpg",
  },
];
