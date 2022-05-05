import Height from "./height"
import Width from "./width"

export class Size {

    private heightInstance: Height
    private widthInstance: Width

    constructor(private h: Number, private w: Number){
        this.heightInstance = new Height(this.h)
        this.widthInstance = new Width(this.w)
    }

    height(): Height{
        return this.heightInstance
    }

    width(): Width{
        return this.widthInstance
    }

}
