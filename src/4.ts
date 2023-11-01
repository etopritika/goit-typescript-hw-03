class Key {
  constructor(private signature: number) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
    this.door = false;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (
      this.door &&
      this.key.getSignature() === person.getKey().getSignature()
    ) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log(
        `${person.getKey().getSignature()} cannot enter. The door is closed.`
      );
    }
  }
}

class MyHouse extends House {
    openDoor(key: Key) {
      if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('The door remains closed. Incorrect key.');
      }
    }
  }

const key = new Key(Math.floor(Math.random() * 1000));

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

// export {};
