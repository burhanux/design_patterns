abstract class Car {
	public description: string;
	public getDescription(): string {
		return this.description;
	}
	public abstract cost(): number;
}

class ModelS extends Car {
	public description: string = "This is my Model S Tesla";
	public getDescription(): string {
		return this.description;
	}
	public cost(): number {
		return 70_000;
	}
}

class ModelX extends Car {
	public description: string = "This is my Model X Tesla";
	public getDescription(): string {
		return this.description;
	}
	public cost(): number {
		return 75_000;
	}
}

abstract class OptionalCarFeature extends Car {
	public car: Car;
	public abstract getDescription(): string;
	public abstract cost(): number;
}

class EnhancedAutoPilot extends OptionalCarFeature {
	public car: Car;
	constructor(car: Car) {
		super();
		this.car = car;
	}
	public getDescription(): string {
		return this.car.getDescription();
	}
	public cost(): number {
		return this.car.cost() + 5000;
	}
}

class RearFacingSeats extends OptionalCarFeature {
	public car: Car;
	constructor(car: Car) {
		super();
		this.car = car;
	}
	public getDescription(): string {
		return this.car.getDescription();
	}
	public cost(): number {
		return this.car.cost() + 2500;
	}
}

let myTeslaS = new ModelS();
myTeslaS = new EnhancedAutoPilot(myTeslaS);
console.log("myTeslaS", myTeslaS.getDescription(), myTeslaS.cost());
let myTeslaX = new ModelX();
myTeslaX = new RearFacingSeats(myTeslaX);
console.log("myTeslaX", myTeslaX.getDescription(), myTeslaX.cost());
