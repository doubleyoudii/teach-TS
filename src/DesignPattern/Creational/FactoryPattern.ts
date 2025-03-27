abstract class Vehicle {
    abstract use(): void;
}

class Bike extends Vehicle {
    use () {
        console.log('Riding a Bike');
    }
}

class Car extends Vehicle {
    use() {
        console.log('Riding a Car');
    }
}

// Define Factory method
abstract class VehicleFactory {
    abstract createVehicle(): Vehicle;
}

class BikeFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Bike();
    }
}

class CarFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}

// application
const bike = new BikeFactory();     // Base
const myBike = bike.createVehicle();
myBike.use();


const car = new CarFactory();
const myCar = car.createVehicle();
myCar.use();