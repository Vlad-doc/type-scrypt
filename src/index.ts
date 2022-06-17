function average(a: number, b: number, c: number): string {
  const avg: number = (a + b + c) / 3
  return `Average is ${avg}`
}
average(1) // An argument for 'b' was not provided.
average(1, 2, "fg") // Argument of type 'string' is not assignable to parameter of type 'number'

function getAverage(a: number, b?: number, c?: number): string {
  if (b === undefined) {
    b = 0
  }
  if (c === undefined) {
    c = 0
  }
  const avg: number = (a + b + c) / 3
  return `Average is ${avg}`
}
getAverage(1)
getAverage(1, 2)

function argsAverage(...args: (string | number)[]): string {
  let total: number = 0
  for (const item of args) {
    if (typeof item === "string") {
      total += Number(item)
      continue
    }
    total += item
  }
  const avg: number = total / args.length
  return `${avg}`
}
argsAverage(2, 4, 5, 6, 7, 8)
