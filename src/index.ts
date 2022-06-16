/* eslint-disable no-unused-vars */

// interfaces, alias, functions, classes - можем обобщать

interface IAccount<ID> {
  // <ID> - дженерик
  id: ID
  name: string
  info: {
    male: true
  }
}
const admin: IAccount<string> = {
  id: "asd",
  name: "Igor",
  info: {
    male: true,
  },
}
const user: IAccount<number> = {
  id: 45,
  name: "Vlad",
  info: {
    male: true,
  },
}

interface IMyAccount<ID extends string | number> {
  id: ID
  name: string
}
const muser: IMyAccount<boolean> = {
  // Type 'boolean' does not satisfy the constraint 'string | number'
  id: true,
  name: "Cic",
}

interface IFirstAccount<GeneralInfo extends { male: boolean }, ID = string> {
  id: ID
  name: string
  info: GeneralInfo
}
const firstAdmin: IFirstAccount<{ email: string; male: boolean }> = {
  id: "asd",
  name: "Fgh",
  info: {
    male: true,
    email: "asd@asd.ru",
  },
}

function getProperty<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  return obj[key]
}
const key = "name"
getProperty(muser, key)
