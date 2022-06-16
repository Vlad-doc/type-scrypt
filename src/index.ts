/* eslint-disable no-unused-vars */

type notUndef<T> = T extends undefined | null ? never : T
const nonUnd: notUndef<string | undefined | null> = 123 // Type 'number' is not assignable to type 'string'.ts(2322)

type NotReadOnly<T> = {
  -readonly [P in keyof T]: T[P]
}
type Acc = {
  readonly firstName: string
  readonly age: number
}
const acc1: NotReadOnly<Acc> = {
  firstName: "Igor",
  age: 56,
}
acc1.age = 56

const cc: Record<"a" | "b", number> = {
  a: 45,
  b: 56,
  c: 45, // Object literal may only specify known properties, and 'c' does not exist in type 'Record<"a" | "b", number>'
}

interface Person {
  name: string
  age: number
  info: {
    salary: number
  }
}
type RemoveByType<T, E> = {
  [P in keyof T]: E extends T[P] ? never : P
}[keyof T]
const p: RemoveByType<Person, { male: boolean; salary: number }> = 1
