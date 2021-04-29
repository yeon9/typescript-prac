// object
function printLabel_obj(labeledObj: {label: string}) {
	console.log(labeledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}

printLabel_obj(myObj)

// interface
interface LabeledValue {
	label: string
}

function printLabel_interface(labeledObj: LabeledValue) {
	console.log(labeledObj.label)
}

let myObj2 = {size: 10, label: 'Size 10 Object'}
printLabel_interface(myObj2)

// optional properties
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

// Readonly properties
interface Point {
	readonly x: number
	readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 5	 Error!

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

// ro[0] = 12 	Error!
// ro.push(5)		Error!
// ro.length = 100 	Error!
// a = ro		Error!
// 일반 배열에 재할당 불가

a = ro as number[]

// 변수는 const 사용, properties는 readonly 사용
