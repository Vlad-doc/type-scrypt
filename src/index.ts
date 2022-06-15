/* eslint-disable no-unused-vars */

const anyType: any = null
anyType.a = 78
anyType["a"] = "ghj"
anyType()

let objType: Object = { a: 1 }
objType.a = 1
objType = {}
objType()
objType = 1
Object.create(objType)

let unkType: unknown = null
unkType.a = 78
unkType["a"] = "ghj"
unkType = null

let voidType: void = undefined // undefined || null
voidType = undefined
