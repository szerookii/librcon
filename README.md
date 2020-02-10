# librcon

libquery is an easy to use NodeJS library for send commands via RCON on different game servers

## Installation

```bash
npm i librcon
```

## Usage

```js
// Promises
const librcon = require("librcon");

librcon.send("list", "password", "0.0.0.0", 19132).then((res) => {
	console.log("Got response : " + res);
}).catch((err) => {
	console.log("An error occured!\n " + err.message);
});

// Async
try{
    let res = await librcon("list", "password", "0.0.0.0", 19132);
    console.log("Got response : " + res);
}catch(err){
    console.log("An error occured!\n " + err.message);
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
