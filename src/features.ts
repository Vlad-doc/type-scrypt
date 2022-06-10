const period = 60
const baseUrl = "http://localhost"

const firstName = "Igor"
const account = {
  firstName,
  getName() {
    return this.firstName
  },
}

const persone = { ...account }
const dates = [...[11, 12, 13]]

const { firstName: myName } = persone
const [firstDate] = dates

for (const date of dates) {
  console.log(date)
}

const sum = (a: number, b: number) => a + b
sum(5, 6)

class Point {
  x: number | undefined
  y!: number
}

function useMessage(
  [start, end]: TemplateStringsArray,
  { firstName }: typeof account,
) {
  return `${start}${firstName}${end}`
}
console.log(useMessage`Good day, ${persone} !!`)
