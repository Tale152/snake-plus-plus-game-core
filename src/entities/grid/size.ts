import Integer from "../../utilities/wrappers/integer"

export default class Size {

    private constructor(private w: Integer, private h: Integer){
        let zero = Integer.createZero()
        if(w.compareTo(zero).value() <= 0){
            throw Error("Width cannot be zero or less")
        } else if (h.compareTo(zero).value() <= 0){
            throw Error("Height cannot be zero or less")
        }
    }

    static createInstance(width: Integer, height: Integer): Size {
        return new Size(width, height)
    }

    height(): Integer {
        return this.h
    }

    width(): Integer {
        return this.w
    }

    toString(): string {
        return ("[width: " + this.w + ", height: " + this.h + "]")
    }

    equalsTo(s: Size): boolean {
        return this.w === s.width() && this.h === s.height()
    }

}
