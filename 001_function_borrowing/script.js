// function borrowing: call, apply, bind

const name = {
    firstName: "Mahipat",
    lastName: "Singh",
}

const printDetails = function (qualification, city) {
    console.log(this.firstName + " " + this.lastName + " " + qualification + " " + city);
}

//name.printDetails();

const name2 = {
    firstName: "Anita",
    lastName: "Subasini"
}

printDetails.call(name, "B. Tech");
printDetails.call(name2, "M.Sc.");

printDetails.apply(name, ["B.Tech.", "Dhanbad"]);

const printDetailsLater = printDetails.bind(name2, "M.Sc.", "Coimbatore");
console.log(printDetailsLater);

printDetailsLater();

