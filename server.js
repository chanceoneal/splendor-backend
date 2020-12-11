const app = require("express")();
const port = process.env.PORT || 4000;

const cors = require("cors");

app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}));

app.get("/", (request, response) => {
	response.send("Hello world");
});

const server = app.listen(port, () => {
	console.log("Server started on:", port);
});

const io = require("socket.io").listen(server);
require("./socket")(io);