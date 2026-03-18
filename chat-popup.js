setTimeout(() => {
  document.getElementById("chatPopup").style.display = "block";
  startTyping();
}, 10000);

function closeChat() {
  document.getElementById("chatPopup").style.display = "none";
}

function playSound() {
  const audio = new Audio(
    "https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3",
  );
  audio.volume = 0.5;
  audio.play();
}

function startTyping() {
  const text = "Hi 👋 I can help you build a modern website. What do you need?";
  const container = document.getElementById("chatBody");
  container.innerHTML = "";

  let i = 0;
  const msg = document.createElement("div");
  msg.className = "chat-msg bot typing";
  container.appendChild(msg);

  function type() {
    if (i < text.length) {
      msg.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 30);
    } else {
      msg.classList.remove("typing");
      playSound(); // 🔔 sound when message complete
    }
  }
  type();
}
