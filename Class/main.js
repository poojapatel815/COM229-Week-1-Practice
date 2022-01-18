class vehicle{
    constructor(wheels){
        this.wheels = wheels;
    }
    toString(){
        return '(' + this.wheels + ')';
    }
}

class car extends vehicle{
    constructor(color){
        super(4);
        this.color = color;
    }
    toString(){
        return super.toString() + 'colored: ' + this.color; 
    }
}

let Car = new car('blue');
console.log(Car.toString());

console.log(Car instanceof car);
console.log(Car instanceof vehicle);

