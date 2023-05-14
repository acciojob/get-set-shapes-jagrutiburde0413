//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get getwidth(){
		return this._width
	} 
	get getheight(){
		return this._height
	}
	getArea(){
		return this._width*this._height
	}
}

class Square extends Rectangle{
	 constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.getWidth();
  }
}
const rect = new Rectangle(5, 10);
console.log(rect.getWidth());    // output: 5
console.log(rect.getHeight());   // output: 10
console.log(rect.getArea());     // output: 50

const square = new Square(7);
console.log(square.getWidth());      // output: 7
console.log(square.getHeight());     // output: 7
console.log(square.getArea());       // output: 49
console.log(square.getPerimeter());  // output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
