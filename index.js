Object.defineProperty(window, "MySweetApp", {
  value: "v1.0.0",
  readonly: false,
})

function deliveryMethod() {
  // TODO make some calculation
  return "overnight"
}

function shipWeight() {
  return parseInt(document.getElementById("weight").innerHTML)
}

/**
 *
 * @param {(string | string[])} emailAddr
 */

function sendUpdates(emailAddr) {
  // string or string array

  function sendEmail(addr) {
    console.log(
      `Shipping to ${addr} via ${deliveryMethod() | "standard"} delivery`,
    )
    if (shipWeight() > 100) {
      console.log("WARNING: Oversize package")
    }
  }

  if (emailAddr.length) {
    emailAddr.forEach((idx, val) => {
      sendEmail(val.trim())
    })
  } else {
    sendEmail(emailAddr.trim())
  }
}

sendUpdates(1)
