const FLAVORS = {
    "STRAWBERRY": 0.25, "VINILLA": 0.50, "FRENCH VINILLA": 0.75, "CHOCOLATE": .25, "JAVA": 0.75, "CHOCOLATE CHIP": 0.50, "CHOCOLATE MINT": 0.50,
};
abstract class Order {
    public order: Order | undefined;
    public price: number;
    public abstract getPrice(): number;
    public abstract getDetail(): string;
}

abstract class Container extends Order {
    public order: Order;
    public size: number;
    public price: number;
    public scoops: number;
    public abstract getPrice(): number;
    public abstract getDetail(): string;
}

class Scoop extends Container {
    public order: Order;
    public scoops: number;
    public price: number;
    constructor(scoops: number) {
        super();
        this.scoops = scoops;
        this.price = scoops * .50 // 50 cents per scoop;
    }
    public getPrice(): number {
        return this.price;
    };
    public getDetail(): string {
        return `Scoops:\n\t(${(.50).toFixed(2)})x${this.scoops}..........$${this.getPrice().toFixed(2)}`
    };
}

class Bowl extends Container {
    public order: Order;
    public price: number = 0.05;
    constructor(order: Order) {
        super();
        this.order = order;
    }
    public getPrice(): number {
        return this.order.getPrice() + this.price;
    };
    public getDetail(): string {
        return `${this.order.getDetail()}\nContainer:\n\tBowl..........$${(this.price).toFixed(2)}`
    };
}

class Cone extends Container {
    public order: Order;
    public price: number = 0.20;
    constructor(order: Order) {
        super();
        this.order = order;
    }
    public getPrice(): number {
        return this.order.getPrice() + this.price;
    };
    public getDetail(): string {
        return `${this.order.getDetail()}\nContainer:\n\tCone..........$${(this.price).toFixed(2)}`
    };
}

class Flavor extends Container {
    public order: Order;
    protected flavor: string[];
    constructor(order: Order, flavor: string[]) {
        super();
        this.order = order;
        this.flavor = flavor;
    }
    public getPrice(): number {
        return this.flavor.reduce((agg, inc) => agg + FLAVORS[inc], this.order.getPrice())
    };
    public getDetail(): string {
        return this.flavor.reduce((agg, inc) => agg + `\t${inc}..........$${(FLAVORS[inc]).toFixed(2)}\n`, `${this.order.getDetail()}\nFlavor(s):\n`)
    };
}

function main() {
    // How many Scoops?
    let order = new Scoop(3);
    // Bowl or Cone
    order = new Bowl(order);
    // Which Flavor
    order = new Flavor(order, ["FRENCH VINILLA", "FRENCH VINILLA", "JAVA"]);
    console.log(order.getDetail())
    console.log("Total:\n\t$" + order.getPrice().toFixed(2))
    // Any Toppings?
}

main();