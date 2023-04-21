from abc import ABC, abstractclassmethod
class Car(ABC):
    @abstractclassmethod
    def getDescription():
        pass
    @abstractclassmethod
    def cost():
        pass

class ModelS(Car):
    def __init__(self):
        self.description = "This is my Model S Tesla"

    def getDescription(self):
        return self.description

    def cost(self):
        return 70_000

class ModelX(Car):
    def __init__(self):
        self.description = "This is my Model X Tesla"

    def getDescription(self):
        return self.description

    def cost(self):
        return 75_000

class OptionalCarFeature(Car):
    def getDescription(self):
        pass
    
    def cost(self):
        pass
    
class EnhancedAutoPilot(OptionalCarFeature):
    def __init__(self, car):
        self.car = car
    
    def getDescription(self):
        return self.car.getDescription()
    
    def cost(self):
        return self.car.cost() + 2500
    
class RearFacingSeats(OptionalCarFeature):
    def __init__(self, car):
        self.car = car
    
    def getDescription(self):
        return self.car.getDescription()
    
    def cost(self):
        return self.car.cost() + 5000
    
myModelS = ModelS()
myModelS = EnhancedAutoPilot(myModelS)
print(myModelS.getDescription(), myModelS.cost())
myModelX = ModelX()
myModelX = RearFacingSeats(myModelX)
print(myModelX.getDescription(), myModelX.cost())