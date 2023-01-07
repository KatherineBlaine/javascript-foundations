var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }

fillFoodBowl() {
  this.dog.hungry = false;
}

throwBall() {
  if (this.dog.energyLevel > 3)
  this.dog.energyLevel --;
  return `${this.dog.name} loves playing fetch!`
} 

introduceNewFriends(dogFriend) {
  this.dog.friends.push(dogFriend.name)
}

adoptAPup(dogName, dogAge) {
  if (this.dog === undefined) {
  this.dog = new Dog({name: dogName, age: dogAge})
  this.dog.name = dogName;
  this.dog.age = dogAge;
  } else {
    return 'You can\'t adopt Chloe. You already have Cap!'
  }
}

}

module.exports = Person;
