function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const msg = document.getElementById("formMsg");

  let valid = true;

  [name, email, message].forEach((el) => el.classList.remove("error"));

  if (name.value.trim() === "") {
    name.classList.add("error");
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    email.classList.add("error");
    valid = false;
  }

  if (message.value.trim().length < 10) {
    message.classList.add("error");
    valid = false;
  }

  if (!valid) {
    msg.innerText = "⚠️ Please fill all fields correctly";
    msg.className = "error-text";
  } else {
    sendEmail(name.value, email.value, message.value);
  }
}

// EMAILJS INTEGRATION
function sendEmail(name, email, message) {
  emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      "YOUR_PUBLIC_KEY",
    )
    .then(() => {
      document.getElementById("formMsg").innerText =
        "✅ Message sent successfully!";
      document.getElementById("formMsg").className = "success";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(() => {
      document.getElementById("formMsg").innerText =
        "❌ Failed to send message";
      document.getElementById("formMsg").className = "error-text";
    });
}

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!email.value.match(emailPattern)) {
  email.classList.add("error");
  valid = false;
}

if (message.value.trim().length < 10) {
  message.classList.add("error");
  valid = false;
}

if (!valid) {
  msg.innerText = "⚠️ Please fill all fields correctly";
  msg.className = "error-text";
} else {
  msg.innerText = "✅ Message sent successfully!";
  msg.className = "success";

  // reset form
  name.value = "";
  email.value = "";
  message.value = "";
}
