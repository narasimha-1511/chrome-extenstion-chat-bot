var sendBtn = document.getElementById("send-button");

sendBtn.addEventListener("click", clickFunc);

function clickFunc() {
  var userInput = document.getElementById("user-input");

  var userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userMessage.textContent = userInput.value;
  chatbox.appendChild(userMessage);
  Chat();
  userInput.value = "";

  chatbox.scrollTop = chatbox.scrollHeight;
}

function Chat() {
  var userInput = document.getElementById("user-input");
  var chatbox = document.getElementById("chatbox");
  var botMessage = document.createElement("p");

  const prompt = userInput.value;
  console.log(prompt);
  chrome.runtime.sendMessage(
    { message: "textToTextPrompt", prompt: prompt },
    function (response) {
      botMessage.classList.add("bot-message");
      var pre = document.createElement("pre");
      pre.textContent = response;
      botMessage.appendChild(pre);
      chatbox.appendChild(botMessage);
    }
  );
}
