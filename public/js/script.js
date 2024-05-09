//const { response } = require("express");

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
  console.log("userMessage:", userMessage);
  var chatbotMessage = "";

  var result = arrayOfPossibleMessage.filter((val) =>
    val.message.includes(userMessage.toLowerCase())
  );
  if (result.length > 0) {
    var response = result[0].response;
    chatbotMessage = response;
  } else {
    chatbotMessage = "No se encontró respuesta";
  }

  var messageElement = document.createElement("div");
  messageElement.innerHTML =
    "<span> Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";

  chatContainer.appendChild(messageElement);
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
