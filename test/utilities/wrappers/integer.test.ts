import Integer from "../../../src/utilities/wrappers/integer"

const xValue: number = 4
const yValue: number = 2
const zValue: number = 3

const x: Integer = Integer.createInstance(xValue)
const y: Integer = Integer.createInstance(yValue)
const z: Integer = Integer.createInstance(zValue)

it("should throw exception if a non-Number value is provided while creating an instance", () => {
    expect(() => Integer.createInstance(null)).toThrow
})

it("should throw exception if a non-Integer value is provided while creating an instance", () => {
    expect(() => Integer.createInstance(1.1)).toThrow
})

it("should return the correct value", () => {
    expect(x.value()).toEqual(xValue)
})

it("should be comparable", () => {
    expect(x.compareTo(y).value()).toEqual(1)
    expect(y.compareTo(z).value()).toEqual(-1)
    expect(z.compareTo(z).value()).toEqual(0)
})

it("should be convertable to string containing its value", () => {
    expect("value: " + x).toEqual("value: " + xValue)
})

it("should perform a sum", () => {
    expect(x.sumWith(y).value()).toEqual(xValue + yValue)
})

it("should perform a subtraction", () => {
    expect(x.subtract(y).value()).toEqual(xValue - yValue)
})

it("should perform a multiplication", () => {
    expect(x.multiplyBy(y).value()).toEqual(xValue * yValue)
})

it("should perform a division rounding to the nearest Integer", () => {
    expect(x.roundedDivisionBy(z).value()).toEqual(Math.round(xValue / zValue))
})

it("should perform a division without rounding the result", () => {
    expect(x.divideBy(z)).toEqual(xValue / zValue)
})
