import AVTR1 from "/images/avatar1.jpg"

export interface dataType {
  id: number,
  image: AVTR1,
  title: string,
  description: string,
}

const dataList: dataType[] = [
  {
    id:1,
    image: AVTR1,
    title: "title",
    description: "description",
  },
  {
    id:1,
    image: AVTR1,
    title: "title",
    description: "description",
  },
  {
    id:1,
    image: AVTR1,
    title: "title",
    description: "description",
  },
]

export default dataList;