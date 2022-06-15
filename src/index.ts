/* eslint-disable no-unused-vars */

const user: {
  readonly firstName: string
  readonly age?: number // ? - необязательное поле
} = {
  firstName: "Igor",
}
user.age = 33

const booleanMap: {
  [userName: string]: typeof user
} = {
  Igor: {
    firstName: "Igor",
  },
}

const arr: Array<number> = []
const arr1: number[] = []
const arr2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]
// arr2 && arr3 эквивалентные записи
const arr3: typeof arr[] = [
  [1, 2, 3],
  [4, 5, 6],
]
const arr4: ReadonlyArray<number> = [1, 2, 3]
arr4[50] = 34
arr4.push(12)

const arr5: [number, string, typeof user] = [1, "one", { firstName: "Igor" }]
arr5.push(3) // баг

const arr6 = [1, 2, 3] as const // аналогично ReadonlyArray<number>
