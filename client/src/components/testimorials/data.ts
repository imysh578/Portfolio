import AVTR1 from "/images/avatar1.jpg"

export interface dataType {
  id: number,
  image: AVTR1,
  client: string,
  review: string,
}

const dataList: dataType[] = [
  {
    id:1,
    image: AVTR1,
    client: "client",
    review: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
  },
  {
    id:1,
    image: AVTR1,
    client: "client",
    review: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
  },
  {
    id:1,
    image: AVTR1,
    client: "client",
    review: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
  },
]

export default dataList;