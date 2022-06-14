/* eslint-disable no-unused-vars */

type Digit = 1 | 2 | 3 | 4 | 5
const num: Digit = 5
const bum: Digit = 56

const sum: number = 34

const bool: boolean = false

enum Actions {
  Top = 0,
  Left = 90,
}
const direction: keyof typeof Actions = "Top"

interface IFact {
  factId: number
  userForm: string
  userRoad: string
}
const uniqueValue = (): "factId" | "userForm" | "userRoad" => {
  return "factId"
}
const dataList: { action: string; data: IFact }[] = []
dataList.map((item: { action: string; data: IFact }) => {
  if (item.data[uniqueValue()] === 2) {
    return 2
  }
  return item
})

const person = {
  name: "Igor",
  age: 33,
  info: {
    male: true,
  },
}
type Person = typeof person
const keys: keyof typeof person = "name"
const values: Person[keyof Person] = { a: 1 }
