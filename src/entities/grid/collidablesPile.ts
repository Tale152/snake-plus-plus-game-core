import Integer from "../../utilities/wrappers/integer"
import Collidable from "./collidable"

export default class CollidablesPile {

    private pile: Array<Collidable>

    private constructor(p: Array<Collidable>){
        this.pile = p
    }

    public static createEmptyPile(): CollidablesPile {
        return new CollidablesPile(new Array<Collidable>())
    }

    length(): Integer {
        return Integer.createInstance(this.pile.length)
    }

    prepend(c: Collidable): CollidablesPile {
        return new CollidablesPile([c, ...this.pile])
    }

    append(c: Collidable): CollidablesPile {
        return new CollidablesPile([...this.pile, c])
    }

    remove(c: Collidable): CollidablesPile {
        let collidableIndex = this.pile.indexOf(c)
        if(collidableIndex >= 0){
            let pileDeepCopy: Array<Collidable> = this.pile
            pileDeepCopy.splice(collidableIndex, 1)
            return new CollidablesPile(pileDeepCopy)
        } else {
            return this
        }
    }

    contains(c: Collidable): boolean {
        return this.pile.indexOf(c) >= 0
    }
}