/* eslint-disable no-unused-vars */

const sn: string | number = 22
const user: { name: string } & { age: number } = { name: "Igor", age: 45 }

interface IStudent {
  id: string
  name: string
  lectures: string[]
}
interface ITeacher {
  id: number
  name: string
  lessons: string[]
}
function getSubjects(person: ITeacher | IStudent) {
  if ("lessons" in person) {
    return person.lessons
  }
  return person.lectures
}

type worker = {
  id: string
  salary?: number
  info: {
    male: boolean
  }
}
type toff = {
  id: number
  name: string
  skill: []
} & worker
