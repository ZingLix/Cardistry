// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
import path from 'path'

export type MovesType = {
  key: string,
  name: string,
  cover_img: string,
  tags: string[],
  designer: string,
  img_list: {
    url: string
  }[],
  tutorial_list: {
    url: string,
    author: string,
    cover: string,
    tags: string[]
  }[]

}

const MOVE_IMG_URL_PREFIX = "/img/moves"
const dataDirectory = path.join(process.cwd(), 'data')
const rawList = fs.readFileSync(path.join(dataDirectory, "moves.json"));
var moveList: MovesType[] = JSON.parse(rawList);
moveList.forEach(move => {
  move.cover_img = MOVE_IMG_URL_PREFIX + move.cover_img;
  move.img_list.forEach(img => img.url = MOVE_IMG_URL_PREFIX + img.url)
  move.tutorial_list.forEach(tutorial => tutorial.cover = MOVE_IMG_URL_PREFIX + tutorial.cover)
})


export default function MovesList(): MovesType[] {
  return moveList
}

export function QueryMove(key: string): MovesType | undefined {
  const moves = MovesList()
  return moves.find(move => move.key === key)
}