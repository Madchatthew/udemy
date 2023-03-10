function myForEach(arr, func) {
    //loop through array
    for(var i = 0; i < arr.length; i++) {
        //call func for each item in array
        func(arr[i]);
    }
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, alert);

myForEach(colors, function(color) {
    console.log(color);
});

Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var friends = ["charlie", "dave", "maddy", "caitlin"];

friends.myForEach(function(name) {
    console.log("I love " + name);
});