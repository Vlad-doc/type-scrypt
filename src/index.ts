/* eslint-disable no-unused-vars */

interface IFn {
  (x: number, y: number): number
}
type Fn = (x: number, y: number) => number // алиас
const fn: { (x: number, y: number): number } = (x: number, y: number) => {
  return x + y
}
const fn1: IFn = (x: number, y: number) => {
  return x + y
}
const fn2: Fn = (x: number, y: number) => {
  return x + y
}
let fn3: (x: number, y: number) => number

type PointX = { x: number }
interface PointY {
  y: number
}
type Point = PointX & PointY
interface Ipoint extends PointX, PointY {}
const p1: Point = {
  x: 1,
  y: 2,
}
const p2: Ipoint = {
  x: 1,
  y: 2,
}

const shpoint: Points = {
  x: 55,
  // Property 'y' is missing in type '{ x: number; }' but required in type 'Points'
}
interface Points {
  x: number
}
interface Points {
  y: number
}
