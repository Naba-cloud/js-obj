import "./styles.css";
// First method To apply abstraction and access the private members and properties
// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   this.draw = function () {
//     console.log("draw");
//   };
//   this.defaultLocation = function () {
//     //possible bcoz of closure  this method can access its local variable as well as its parent's

//     console.log(defaultLocation);
//   };
// }
// const circle = new Circle(5);
// console.log(circle.defaultLocation)

// Second Method
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.draw = function () {
    console.log("draw");
  };
  // this.defaultLocation = function () {
  //possible bcoz of closure  this method can access its local variable as well as its parent's
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      // console.log(value.x);
      // console.log(value.y);
      // we can also apply validation here
      if (!value.x || !value.y) {
        throw new Error("Invalid Value");
      }
    }
  });
}
const circle = new Circle(6);
circle.defaultLocation = { x: 1, y: 3 };
console.log(circle.defaultLocation.x);
