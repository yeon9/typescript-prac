/* object */
function printLabel_obj(labeledObj: {label: string}) {
	console.log(labeledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}

printLabel_obj(myObj)

/* interface */
interface LabeledValue {
	label: string
}

function printLabel_interface(labeledObj: LabeledValue) {
	console.log(labeledObj.label)
}

let myObj2 = {size: 10, label: 'Size 10 Object'}
printLabel_interface(myObj2)

/* optional properties */
interface SquareConfig {
	color?: string
	width?: number
}
// ?를 붙이면 optional 설정 가능

function createSquare(config: SquareConfig): {color: string; area: number} {
	let newSquare = {color: 'white', area: 100}
	if (config.color) newSquare.color = config.color
	if (config.width) newSquare.area = config.width * config.width

	return newSquare
}

let mySquare = createSquare({color: 'black'})

/* Readonly properties */
interface Point {
	readonly x: number
	readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 5	 Error!

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = [19, 34, 45, 39]

// ro[0] = 12 	Error!
// ro.push(5)		Error!
// ro.length = 100 	Error!
// a = ro		Error!
// 일반 배열에 재할당 불가

a = ro as number[] // type assertion으로 override 가능

// 변수는 const 사용, properties는 readonly 사용

/* Excess Property Checks (초과 프로퍼티 검사)*/
// let mySquare2 = createSquare({clour: 'red', width: 100}) 	Error!

// SquareConfig에 clour 프로퍼티는 없기 때문에 excess property checking(초과 프로퍼티 검사)에 걸림
// javascript에서는 조용히 오류 발생(당장 오류가 발생하지 않음), typescript에서는 바로 오류 발생

interface SquareConfig2 {
	color?: string
	width?: number
	[propName: string]: any
}

// let mySquare2 = createSquare({colour: 'red', width: 100})

// 변수명, 개수, 타입 상관없이 excess property 오류 발생하지 않음

/* Function Types (함수 타입) */
interface SearchFunc {
	(source: string, subString: string): boolean
	// 매개변수 와 반환 타입
}

let mySearch: SearchFunc

// 매개변수 이름이 같을 필요는 없음
mySearch = function(source: string, otherString: string): boolean {
	let result = source.search(otherString)
	return result > -1
}

let mySearch2: SearchFunc

// 반환 타입을 명시하지 않아도 contextual typing(문맥상 타이핑)이 타입을 추론
// 아래에서는 boolean으로 추론
mySearch = function(src, sub) {
	let result = src.search(sub)
	return result > -1
}

let mySearch3: SearchFunc

// 인터페이스를 정의할때 반환 타입을 boolean이라고 명시했기때문에 반환 타입은 맞춰줘야함
//	mySearch = function(src, sub) {
//		let result = src.search(sub)
//		return 'string'
//	}
// Error!

/* Indexable Types (인덱서블 타입) */
/* ~~~~~~ 모르겠다 ~~~~~~ */
interface StringArray {
	[index: number]: string /* Index Signature */
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

console.log(myStr)

//let strArr: string[] = ['Bob', 'Fred']

//myStr = strArr[0]
//console.log(myStr)

//	class Animal{
//		name: string
//	}
//	class Dog extends Animal{
//		breed:string
//	}

//	interface NotOkay{
//		[x: number]: Animal
//		[x: string]: Dog
//	}

interface NumberDictionary {
	[index: string]: number
	length: number
	// name: string		Error!  name의 타입은 인덱서의 하위타입이 아님
}

/* Class Types (클래스 타입) */
/* Implementing an interface(인터페이스 구현하기) */
interface ClockInterface {
	currentTime: Date
}
class Clock implements ClockInterface {
	currentTime: Date = new Date()
	constructor(h: number, m: number) {}
}

interface ClockInterface2 {
	currentTime: Date
	setTime(d: Date): void
}
class Clock2 implements ClockInterface2 {
	currentTime: Date = new Date()
	setTime(d: Date) {
		this.currentTime = d
	}

	constructor(h: number, m: number) {}
}

interface ClockConstructor {
	new (hour: number, minute: number): ClockInterface3
}
interface ClockInterface3 {
	tick(): void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface3 {
	return new ctor(hour, minute)
}
