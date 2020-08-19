let array = ["Mahipat", "Vinod"];
let name1 = {
    firstName: "Mahipat",
    lastName: "Singh",
    qualification: "B.Tech.",
    printDetails: function () {
        console.log(this.firstName + " studied " + this.qualification);
    }
}
let name2 = {
    firstName: "Vinod",
    lastName: "Rawat",
    qualification: "M.C.A",
    printDetails: function () {
        console.log(this.firstName + " studied " + this.qualification);
    }
}


name2.__proto__ = name1; // very bad practice