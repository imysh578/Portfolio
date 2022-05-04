import IMG1 from "/images/portfolio1.jpg"

export interface dataType {
  id: number,
  image: string,
  title: string,
  github: string,
  demo: string,
}

const dataList: dataType[] = [
  {
    id:1,
    image: IMG1,
    title: "title",
    github: "https://github.com/imysh578",
    demo: "https://github.com/imysh578"
  },
  {
    id:2,
    image: IMG1,
    title: "title",
    github: "https://github.com/imysh578",
    demo: "https://github.com/imysh578"
  },
  {
    id:3,
    image: IMG1,
    title: "title",
    github: "https://github.com/imysh578",
    demo: "https://github.com/imysh578"
  },
]

export default dataList;