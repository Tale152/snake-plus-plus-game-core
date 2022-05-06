export default class Integer {

    private constructor(private n: number){
        if(Number.isNaN(n) || !Number.isInteger){
            throw Error(n + " is not an Integer value")
        }
    }

    static createInstance(v: number){
        return new Integer(v)
    }

    value(): number {
        return this.n
    }

    sumWith(v: Integer): Integer {
        return Integer.createInstance(this.n + v.value())
    }

    subtract(v: Integer): Integer {
        return Integer.createInstance(this.n - v.value())
    }

    multiplyBy(v: Integer): Integer {
        return Integer.createInstance(this.n * v.value())
    }

    roundedDivisionBy(v: Integer): Integer {
        return Integer.createInstance(Math.round(this.n / v.value()))
    }

    divideBy(v: Integer): number{
        return this.n / v.value()
    }

    compareTo(v: Integer): Integer {
        if(this.n > v.value()){
            return Integer.createInstance(1)
        } else if (this.n < v.value()){
            return Integer.createInstance(-1)
        } else {
            return Integer.createInstance(0)
        }
    }

    toString(): string {
        return this.n.toString()
    }

}
