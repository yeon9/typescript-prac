// object
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
console.log(mySquare);
