// let displayColor = function(message,...colors){
//     console.log(message);
//     console.log(colors);
//     console.log(arguments.length);
//     for (let i in colors){
//         console.log(colors[i]);
//     }
// }
// let message = " list of colors"
// let colorArray = ['orange','Blue','Indigo'];
// displayColor(message,...colorArray);
// displayColor(message,'Red');
// displayColor(message,'Red','Green');
// displayColor(message,'Red','Green','Blue');
var firstName = "murali";
var lastName = "krishnan";
var person = {
    firstName: firstName,
    lastName: lastName
};
function createPerson(firstName, lastName, age) {
    var fullname = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullname: fullname,
        isSenior: function () { return age > 60; }
    };
}
var p = createPerson("murali", "krishnan", 62);
console.log(person.firstName);
console.log(person.lastName);
console.log(p.fullname);
console.log(p.isSenior());
//# sourceMappingURL=let.js.map