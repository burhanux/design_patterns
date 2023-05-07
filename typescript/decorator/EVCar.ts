abstract class EVCar {
    public abstract description: string;
    public price: number = 45_000;
    public getPrice(): number { return this.price }
    public setPrice(price: number): void { this.price = price }
    public abstract getDescription(): string;
}

class Tesla extends EVCar {
    public description: string = "Tesla"
    public getDescription(): string {
        return this.description
    }
}

class ModelA extends Tesla {
    public price: number = 90_000;
    public getDescription(): string {
        return super.getDescription() + " ModelA";
    }
}

class Featuers extends EVCar {
    public car: EVCar;
    public price: number;
    public description: string;
    public getDescription(): string {
        return this.car.getDescription();
    };
    public getPrice(): number {
        return this.car.getPrice();
    };
}

class CarSeatHeater extends Featuers {
    public car: EVCar;
    public price: number;
    public description: string;
    constructor(car: EVCar) {
        super();
        this.car = car;
    }
    public getDescription(): string {
        return this.car.getDescription() + " with Heaters";
    };
    public getPrice(): number {
        return this.car.getPrice() + 20_000;
    };
}

let car = new ModelA();
console.log(car.getDescription())
console.log(car.getPrice())
// Decorator
car = new CarSeatHeater(car);
console.log(car.getDescription())
console.log(car.getPrice())

