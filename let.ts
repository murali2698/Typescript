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


let firstName ="murali"
let lastName = "krishnan"

let person = {
    firstName,
    lastName
}


function createPerson (firstName: string,lastName: string,age : any){
    let fullname = firstName +" "+lastName;
    return {
        firstName,
        lastName,
        fullname,
        isSenior(){ return age>60}
    }
}

let p = createPerson("murali","krishnan",62);
console.log(person.firstName);
console.log(person.lastName);
console.log(p.fullname);
console.log(p.isSenior());



