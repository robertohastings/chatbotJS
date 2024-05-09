//const { response } = require("express");

const { response } = require("express");
const { axios } = require("axios");

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");
var user = {
  message: "",
};

var arrayOfPossibleMessage = [
  { message: "hi", response: "hello" },
  { message: "how are you?", response: "I am good thanks you for ask" },
  { message: "what is your name?", response: "I am a chatbot!" },
  {
    message: "hola",
    response:
      "¡Hola que tal! <br> Seleccione algún número de las siguientes opciones: <br> 1) Ver Sorteos Disponibles<br> 2) Comprar Boletos <br>",
  },
  { message: "1", response: "Ver Sorteos" },
];

function sendMessage(userMessage) {
  var messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";
  messageElement.innerHTML =
    "<span> You: </span>" + "<span>" + userMessage + "</span>";

  chatContainer.appendChild(messageElement);
}

function chatbotRespond(userMessage) {
  var chatbotMessage = "";

  var result = arrayOfPossibleMessage.filter((val) =>
    val.message.includes(userMessage.toLowerCase())
  );

  if (result.length > 0) {
    var response = result[0].response;
    chatbotMessage = response;
  } else {
    chatbotMessage = "Please send another message";
  }

  if (result[0].response === "Ver Sorteos") {
    BoletosDisponibes();
  }

  var messageElement = document.createElement("div");

  messageElement.innerHTML =
    "<span> Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";

  //   var menuLista = document.createElement("ul");
  //   var opcionMenu = document.createElement("li");
  //   opcionMenu.appendChild(document.createTextNode("1. Ver Sorteos Disponibles"));
  //   opcionMenu.appendChild(document.createTextNode("2. Comprar Boleto"));
  //   menuLista.appendChild(opcionMenu);

  //   messageElement.appendChild(menuLista);

  setTimeout(() => {
    messageElement.animate(
      [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
      { duration: 1000 }
    );
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 1000);
}

sendBtn.addEventListener("click", function (e) {
  var userMessage = textbox.value;

  if (!userMessage) {
    alert("Please type a message");
  } else {
    let userMessageText = userMessage.trim();
    user.message = userMessageText;
    textbox.value = "";
    sendMessage(userMessageText);
    chatbotRespond(userMessageText);
  }
});

async function BoletosDisponibes() {
  await axios
    .get("/versorteos")
    .then((response) => {
      console.log("respuesta:", response);
    })
    .catch((error) => {
      console.log("error:", error);
    });
}
