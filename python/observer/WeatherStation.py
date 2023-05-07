from abc import ABC, abstractclassmethod

# _____________Abstract Class_____________
class Subject(ABC): 
    @abstractclassmethod
    def addObserver():
        pass

    @abstractclassmethod
    def removeObserver(o):
        pass
    
    @abstractclassmethod
    def notifyObservers():
        pass

class Observer(ABC):
    @abstractclassmethod
    def update(temperature):
        pass

# _____________Classes_____________
class WeatherStation(Subject):
    def __init__(self, temperature) -> None:
        super().__init__()
        self.observers = []
        self.temperature = temperature

    def setTemperature(self, temperature):
        self.temperature = temperature

    def addObserver(self, o):
        self.observers.append(o)

    def removeObserver(self,o):
        self.observers.remove(o)
    
    def notifyObservers(self):
        for observer in self.observers:
            observer.update(self.temperature)

class WeatherDisplay(Observer):
    def __init__(self, subject):
        super().__init__()
        self.subject = subject
        self.subject.addObserver(self)

    def update(self, temperature):
        print(f'Updating Weather Display', temperature)


class Fan(Observer):
    def __init__(self, subject):
        super().__init__()
        self.subject = subject
        self.subject.addObserver(self)

    def update(self, temperature):
        if(temperature > 80):
            print(f'Its warm today, opening Fan', temperature)
        elif(temperature > 70):
            print(f'Normal weather Closing fan')
        else:
            print(f'Quite Chilly, maybe wear something warm')

weatherStation = WeatherStation(85)
weatherDisplay = WeatherDisplay(weatherStation)
weatherFan = Fan(weatherStation)

weatherStation.notifyObservers()
print('--------------------------')
print('--------------------------')
weatherStation.setTemperature(75)
weatherStation.notifyObservers()
print('--------------------------')
print('--------------------------')
weatherStation.setTemperature(45)
weatherStation.notifyObservers()