export default abstract class Dimension {
    
    constructor(private val: Number){
        if(Number.isNaN(val) || !Number.isInteger(val)){
            throw new Error("Value must be an integer.")
        } else if(val <= 0){
            throw new Error("Value cannot be equal to or less than zero.")
        }
    }

    value(): Number {
        return this.val
    }
}
