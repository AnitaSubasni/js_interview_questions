const name = {
    firstName: "Mahipat",
    lastName: "Singh"
};

const printDetails = function(qualification, City, State) {
    console.log(this.firstName + " " + this.lastName + " " + qualification + " " + City + " " + State);
}

// const printWithBind = printDetails.bind(name);
// printWithBind();

Function.prototype.customBind = function(...args) {
    var obj = this;
    var context = args[0];
    var params = args.slice(1);
    return function(...argsNew) {
        obj.apply(context, [...params, ...argsNew]);
    }
}

const printWithCustomBind = printDetails.customBind(name, "B.Tech.");

printWithCustomBind("Dhanbad", "Jharkhand");