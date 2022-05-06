import Coordinate from "../../../../src/entities/grid/coordinate"
import Integer from "../../../../src/utilities/wrappers/integer"

const x: Integer = Integer.createInstance(10)
const y: Integer = Integer.createInstance(5)
const coordinate: Coordinate = Coordinate.createInstance(x, y)

it("should throw exception if a negative Integer is provided while creating an instance", () => {
    expect(() => Coordinate.createInstance(Integer.createInstance(-1), y)).toThrow()
    expect(() => Coordinate.createInstance(x, Integer.createInstance(-1))).toThrow()
})

it("should return the same x and y provided while creating an instance", () => {
    expect(coordinate.x()).toEqual(x)
    expect(coordinate.y()).toEqual(y)
})

it("should be convertable to string containing x and y", () => {
    expect(coordinate.toString().includes(x.toString()) && coordinate.toString().includes(y.toString())).toBe(true)
})

it("should be possible to check equality (comparing x and y)", () => {
    expect(coordinate.equalsTo(Coordinate.createInstance(x, y))).toBe(true)
    expect(coordinate.equalsTo(Coordinate.createInstance(y, x))).toBe(false)
})
