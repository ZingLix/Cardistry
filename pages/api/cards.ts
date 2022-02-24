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
const CARD_URL_PREFIX = "/img/cards"
const dataDirectory = path.join(process.cwd(), 'data')
const rawList = fs.readFileSync(path.join(dataDirectory, "cards.json"));
var cardsList: CardsType[] = JSON.parse(rawList);
cardsList.forEach(element => {
  element.cover_img = CARD_URL_PREFIX + element.cover_img;
  element.img_list.forEach(item => item.url = CARD_URL_PREFIX + item.url)
});

export default function CardsList(): CardsType[] {
  return cardsList
}

export function QueryCards(key: string): CardsType | undefined {
  const moves = CardsList()
  return moves.find(card => card.key === key)
}