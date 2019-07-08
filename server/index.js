const express = require("express");
const app = express();
const messagesController = require("./Controllers/messages_controller");

const PORT = 3001;

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const messagesBaseUrl = "/api/messages";

app.post(messagesBaseUrl, messagesController.create);
app.get(messagesBaseUrl, messagesController.read);
app.put(`${messagesBaseUrl}/:id`, messagesController.update);
app.delete(`${messagesBaseUrl}/:id`, messagesController.delete);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
