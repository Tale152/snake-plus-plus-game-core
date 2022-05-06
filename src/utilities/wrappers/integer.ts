export default class Integer {

    private constructor(private n: number){}

    static createZero(){
        return new Integer(0)
    }

    static createInstance(v: number){
        if(Number.isNaN(v) || !Number.isInteger){
            throw Error(v + " is not an Integer value")
        }
        return new Integer(v)
    }

    value(): number {
        return this.n
    }

    sumWith(v: Integer): Integer {
        return new Integer(this.n + v.value())
    }

    subtract(v: Integer): Integer {
        return new Integer(this.n - v.value())
    }

    multiplyBy(v: Integer): Integer {
        return new Integer(this.n * v.value())
    }

    roundedDivisionBy(v: Integer): Integer {
        return new Integer(Math.round(this.n / v.value()))
    }

    divideBy(v: Integer): number{
        return this.n / v.value()
    }

    compareTo(v: Integer): Integer {
        if(this.n > v.value()){
            return new Integer(1)
        } else if (this.n < v.value()){
            return new Integer(-1)
        } else {
            return Integer.createZero()
        }
    }

    toString(): string {
        return this.n.toString()
    }

}
