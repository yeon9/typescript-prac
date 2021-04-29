// 불리언
var isDone = false;
// 숫자
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// 문자열
var color = 'blue';
color = 'red';
var fullName = 'Bob Bobbington';
var age = 24;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
// 배열
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 튜플
var x;
x = ['hello', 10];
// x = [10, 'hello']  Error!
// x[3] = 'world'
// console.log(x[5].toString())
var y;
y = ['i am', 25, 'years old'];
console.log(y[2].toString());
// Enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log("c1 : " + c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log("c2 : " + c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 4] = "Red";
    Color3[Color3["Green"] = 5] = "Green";
    Color3[Color3["Blue"] = 6] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[4];
console.log("colorName : " + colorName);
console.log("colorName(number) : " + Color3.Green); // 5
/**
 * Color.Green, Color.Red, Color.Blue => 숫자
 * Color[0], Color[2], Color[4] => 문자
 */
// Any
var notSure = 4;
//notSure = 'maybe a string instead'
//notSure = false
//notSure.ifItExists() Error!
notSure.toFixed();
var prettySure = 4;
// prettySure.toFixed() Error!
var list = [1, true, 'free'];
list[1] = 100;
// void
function warnUser() {
    console.log('This is warning message');
}
var unusable = undefined;
// unusable = null // --strictNullChecks 를 사용하지 않을때만 오류 발생하지 않음
// null, undefined
var u = undefined;
var n = null;
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
function error(message) {
    throw new Error(message);
}
function fail() {
    // 반환 타입이 never로 추측
    return error('Something failed');
}
function infiniteLoop() {
    // never를 반환하는 함수는 함수의 마지막에 도달할 수 없음
    while (true) { }
}
var format = function (value) {
    if (typeof value === 'string')
        return value.substr(-2);
    else if (typeof value === 'number')
        return value.toLocaleString();
    else
        console.log(value);
};
Object.create({ prop: 0 });
Object.create(null);
// create(42)   : number
// create('string')  : string
// create(false)  : boolean
// create(undefined)   : undefined
// type assertions
// <1> angle-bracket 문법
var someValue = 'this is a string';
var strLength = someValue.length;
console.log("strLength : " + strLength);
// <2> as 문법
var someValue2 = 'this is a string';
var strLength2 = someValue2.length;
