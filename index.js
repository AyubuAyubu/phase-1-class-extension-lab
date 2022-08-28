class Polygon {
    constructor(polygonArray) {
        this.polygonArray = polygonArray
    }

    get countSides() {
        let sides = this.polygonArray.length
        return sides
    }

    get perimeter() {
        return this.polygonArray.reduce((totalValue, currentValue) => totalValue + currentValue, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        let side = this.polygonArray
        let side1 = side[0] + side[1]
        let side2 = side[0] +  side[2]
        let side3 =  side[1] +  side[2]
        
        if (this.polygonArray[0] > side3 || this.polygonArray[1] > side2  || this.polygonArray[2] > side1) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let side = this.polygonArray
        let side1 = this.polygonArray[0]
        let num = side.filter(obj => obj === side1)
        console.log(num)
        if (num.length === 4) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.polygonArray[0] ** 2
    }
}