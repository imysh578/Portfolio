import IMG1 from "/images/portfolio1.gif"
import IMG2 from "/images/portfolio1.jpg"
import IMG3 from "/images/portfolio1.jpg"

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
    title: "Music Streaming Platform & ERC721 NFT Market/Auction",
    github: "https://github.com/enum30-BlockChain/Musit",
    demo: ""
  },
  {
    id:2,
    image: "https://user-images.githubusercontent.com/43943231/150467120-c7c488ec-0f2f-4ad6-bc0c-4544ba86a1cb.gif",
    title: "UTXO Blockchain Network",
    github: "https://github.com/imysh578",
    demo: "https://github.com/imysh578"
  },
  {
    id:3,
    image: IMG3,
    title: "title",
    github: "https://github.com/imysh578",
    demo: "https://github.com/imysh578"
  },
]

export default dataList;