/// <reference lib="esnext" />

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function* getItemsRealySlow<T>(
  items: Iterable<T>,
): AsyncIterableIterator<T> {
  for (const item of items) {
    await sleep(2000)
    yield item
  }
}

debugger

export async function speakSloth(items: string[]) {
  for await (const item of getItemsRealySlow(items)) {
    console.log(item)
  }
}
