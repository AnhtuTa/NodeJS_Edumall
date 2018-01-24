console.log("This is moduleDemo.js!");

var sayDtvtIsShit = function() {
    console.log("DTVT is shit!");
}

// dùng exports để chỉ ra các file khác có thể sử dụng function này
module.exports = sayDtvtIsShit;