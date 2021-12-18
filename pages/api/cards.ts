// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
import path from 'path'

export type CardsType = {
  key: string,
  name: string,
  cover_img: string,
  tags: string[],
  designer: string,
  printer: string,
  img_list: {
    url: string
  }[],
}

const dataDirectory = path.join(process.cwd(), 'data')
const rawList = fs.readFileSync(path.join(dataDirectory, "cards.json"));
var cardsList = JSON.parse(rawList);

export default function CardsList(): CardsType[] {
  return cardsList
}

export function QueryCards(key: string): CardsType | undefined {
  const moves = CardsList()
  return moves.find(card => card.key === key)
}