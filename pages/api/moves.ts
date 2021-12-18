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

const dataDirectory = path.join(process.cwd(), 'data')
const rawList = fs.readFileSync(path.join(dataDirectory, "moves.json"));
var moveList = JSON.parse(rawList);

export default function MovesList(): MovesType[] {
  return moveList
}

export function QueryMove(key: string): MovesType | undefined {
  const moves = MovesList()
  return moves.find(move => move.key === key)
}