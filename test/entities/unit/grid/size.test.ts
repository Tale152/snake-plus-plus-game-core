import Size from "../../../../src/entities/grid/size"
import Integer from "../../../../src/utilities/wrappers/integer"

const width: Integer = Integer.createInstance(10)
const height: Integer = Integer.createInstance(5)
const size: Size = Size.createInstance(width, height)

it("should throw exception if zero is provided while creating an instance", () => {
    expect(() => Size.createInstance(Integer.createZero(), height)).toThrow
    expect(() => Size.createInstance(width, Integer.createZero())).toThrow
})

it("should throw exception if a negative Integer is provided while creating an instance", () => {
    expect(() => Size.createInstance(Integer.createInstance(-1), height)).toThrow
    expect(() => Size.createInstance(width, Integer.createInstance(-1))).toThrow
})

it("should return the same height and width provided while creating an instance", () => {
    expect(size.width()).toEqual(width)
    expect(size.height()).toEqual(height)
})

it("should be convertable to string containing width and height", () => {
    expect(size.toString().includes(width.toString()) && size.toString().includes(height.toString())).toBe(true)
})

it("should be possible to check equality (comparing widht and height)", () => {
    expect(size.equalsTo(Size.createInstance(width, height))).toBe(true)
    expect(size.equalsTo(Size.createInstance(height, width))).toBe(false)
})
