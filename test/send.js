const rcon = require("../");

(async() => {
try {
    let data = await rcon.send("list", "your password :D", "0.0.0.0", 19132);
    console.log(data);
} catch(err) {
console.log(err.message);
}
})();