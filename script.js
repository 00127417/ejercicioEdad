// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1994, 0, 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 1; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`,new Date(1998,9,26), `000000${i}`));
}

console.table(list);
// Array Higher function
// Show only the name persons
console.table(list.map(({
        name
}) => name));

// Get average age


function getAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var dateNow= new Date(Date.now());

    if(Math.abs(ageDate.getMonth())>Math.abs(dateNow.getMonth())){
        if(Math.abs(dateNow.getDate())>Math.abs(ageDate.getDate())){
            console.log("DAY");
            return (Math.abs(ageDate.getUTCFullYear() - 1970));
        }
        console.log("MONTH");
        return (Math.abs(ageDate.getUTCFullYear() - 1970));
    }

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);