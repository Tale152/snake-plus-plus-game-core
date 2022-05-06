import Integer from "../../utilities/wrappers/integer"

export default class Coordinate {
    
    private constructor(private xValue: Integer, private yValue: Integer){
        let zero = Integer.createZero()
        if(xValue.compareTo(zero).value() < 0){
            throw Error("x cannot be less than zero")
        } else if (yValue.compareTo(zero).value() < 0){
            throw Error("y cannot be less than zero")
        }
    }

    static createInstance(x: Integer, y: Integer){
        return new Coordinate(x, y)
    }

    x(): Integer {
        return this.xValue
    }

    y(): Integer {
        return this.yValue
    }

    equalsTo(c: Coordinate): boolean {
        return this.xValue === c.x() && this.yValue === c.y()
    }

    toString(): string {
        return "[x: " + this.xValue + ", y: " + this.yValue + "]"
    }
}
