(function() {
    console.log("This method will be executed right after it was constructed!");
}());

(function(name) {
    console.log("This method will be executed right after it was constructed! Hello " + name);
}("Anhtu"));