function getFullName(this: { name: string; surename: string }) {
  return `${this.name} ${this.surename}`
}
const account = {
  name: "Igor",
  surename: "Fgh",
  getFullName: getFullName,
}
account.getFullName()
