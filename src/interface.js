/* object */
function printLabel_obj(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel_obj(myObj);
function printLabel_interface(labeledObj) {
    console.log(labeledObj.label);
}
var myObj2 = { size: 10, label: 'Size 10 Object' };
printLabel_interface(myObj2);
// ?를 붙이면 optional 설정 가능
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.area = config.width * config.width;
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 20 };
// p1.x = 5	 Error!
var a = [1, 2, 3, 4];
var ro = [19, 34, 45, 39];
// ro[0] = 12 	Error!
// ro.push(5)		Error!
// ro.length = 100 	Error!
// a = ro		Error!
// 일반 배열에 재할당 불가
a = ro; // type assertion으로 override 가능
var mySearch;
// 매개변수 이름이 같을 필요는 없음
mySearch = function (source, otherString) {
    var result = source.search(otherString);
    return result > -1;
};
var mySearch2;
// 반환 타입을 명시하지 않아도 contextual typing(문맥상 타이핑)이 타입을 추론
// 아래에서는 boolean으로 추론
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch3;
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
console.log(myStr);
var strArr = ['Bob', 'Fred'];
myStr = strArr[0];
console.log(myStr);
