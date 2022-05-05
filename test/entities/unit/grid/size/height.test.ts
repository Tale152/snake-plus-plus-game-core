import Height from "../../../../../src/entities/grid/size/height"

const testValue: Number = 42

it("should throw exception if a non-Number value is provided in constructor", () => {
    expect(() => new Height(null)).toThrow
})

it("should throw exception if a non-Integer value is provided in constructor", () => {
    expect(() => new Height(1.1)).toThrow
})

it("should throw exception if zero is provided in constructor", () => {
    expect(() => new Height(0)).toThrow
})

it("should throw exception if a negative Integer is provided in constructor", () => {
    expect(() => new Height(-1)).toThrow
})

it("should return the same value provided in the constructor", () => {
    expect(new Height(testValue).value()).toEqual(testValue)
})
