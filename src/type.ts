// 불리언
let isDone: boolean = false

// 숫자
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// 문자열
let color: string = 'blue'
color = 'red'

let fullName: string = 'Bob Bobbington'
let age: number = 24
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`

// 배열
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// 튜플
let x: [string, number]

x = ['hello', 10]
// x = [10, 'hello']  Error!

// x[3] = 'world'
// console.log(x[5].toString())

let y: [string, number, string]
y = ['i am', 25, 'years old']

console.log(y[2].toString())

// Enum
enum Color1 {
	Red,
	Green,
	Blue,
}
let c1: Color1 = Color1.Green
console.log(`c1 : ${c1}`) // 1

enum Color2 {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let c2: Color2 = Color2.Green
console.log(`c2 : ${c2}`) // 2

enum Color3 {
	Red = 4,
	Green,
	Blue,
}
let colorName: string = Color3[4]
console.log(`colorName : ${colorName}`)
console.log(`colorName(number) : ${Color3.Green}`) // 5

/**
 * Color.Green, Color.Red, Color.Blue => 숫자
 * Color[0], Color[2], Color[4] => 문자
 */

// Any
let notSure: any = 4
//notSure = 'maybe a string instead'
//notSure = false
//notSure.ifItExists() Error!
notSure.toFixed()

let prettySure: Object = 4
// prettySure.toFixed() Error!

let list: any[] = [1, true, 'free']
list[1] = 100

// void
function warnUser(): void {
	console.log('This is warning message')
}

let unusable: void = undefined
// unusable = null // --strictNullChecks 를 사용하지 않을때만 오류 발생하지 않음

// null, undefined
let u: undefined = undefined
let n: null = null

/**
 * null과 undefined는 다른 모든 타입의 하위 타입
 * ex) number > null, undefined
 * 
 * --strictNullChecks 을 사용하면 null, undefined는 any, 각자 타입에만 할당 가능 (undefined는 void도 가능)
 * 
 * string, null, undefined를 허용하고 싶은 경우
 * 유니언 타입 string | null | undefined 사용
 */

// never
// 절대 발생 할 수 없는 타입, 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입

function error(message: string): void {
	throw new Error(message)
}

function fail() {
	// 반환 타입이 never로 추측
	return error('Something failed')
}

function infiniteLoop(): never {
	// never를 반환하는 함수는 함수의 마지막에 도달할 수 없음
	while (true) {}
}

const format = (value: string | number) => {
	if (typeof value === 'string') return value.substr(-2)
	else if (typeof value === 'number') return value.toLocaleString()
	else console.log(value)
}

// never는 throw exception, never return 의 경우

// Object
// number, string, boolean, bigint, symbol, null, undefined가 아닌 나머지

/**
 *  declare 
 *  변수, 상수, 함수, 클래스가 어딘가에 이미 선언되어 있음을 알림
 *  js코드로 컴파일 되지는 않고 typesciprt 컴파일러에게 타입 정보를 알리기만 함
 *  타입은 js 코드로 컴파일 되지 않기 때문에 declare 키워드를 사용하지 않아도 됨
 * */

declare function create(o: object | null): void
Object.create({prop: 0})
Object.create(null)

// create(42)   : number
// create('string')  : string
// create(false)  : boolean
// create(undefined)   : undefined

// type assertions
// <1> angle-bracket 문법
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

console.log(`strLength : ${strLength}`)

// <2> as 문법
let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length
