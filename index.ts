Object.defineProperty(window, "MySweetApp", {
  value: "v1.0.0",
  writable: true,
})

function deliveryMethod() {
  // TODO make some calculation
  return "overnight"
}

function shipWeight() {
  return parseInt(
    (document.getElementById("weight") as HTMLDivElement).innerHTML,
  )
}

function sendUpdates(emailAddr: string | string[]) {
  // string or string array

  function sendEmail(addr: string) {
    console.log(
      `Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`,
    )
    if (shipWeight() > 100) {
      console.log("WARNING: Oversize package")
    }
  }

  if (Array.isArray(emailAddr)) {
    emailAddr.forEach((val) => {
      sendEmail(val.trim())
    })
  } else {
    sendEmail(emailAddr.trim())
  }
}
