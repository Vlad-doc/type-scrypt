import { list } from "./data"
import { generateMenu } from "./menu"
import "./styles.css"

const navMenu = document.querySelector(".menu") as HTMLDivElement
navMenu.innerHTML = generateMenu(list)
navMenu.addEventListener("click", (event: MouseEvent) => {
  const el: HTMLElement = event.target as HTMLElement
  if (!el.classList.contains("title")) {
    return
  }
  const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement
  parentLi.classList.toggle("menu-open")
})
