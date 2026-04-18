function submitForm(e) {
  e.preventDefault();
  const whatsapp_name = document.getElementById("whatsapp_name").value;
  const whatsapp_phone = document.getElementById("whatsapp_phone").value;
  const whatsapp_email = document.getElementById("whatsapp_email").value;
  const whatsapp_message = document.getElementById("whatsapp_message").value;

  const text = `Hello, I want to visit your CBNK - Store.%0AName: ${whatsapp_name}%0APhone: ${whatsapp_phone}%0AEmail: ${whatsapp_email}%0AMessage: ${whatsapp_message}`;

  const whatsappNumber = "919839507418";

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}

function openPopup() {
  document.getElementById("whatsapp-popup").classList.add("active");
}
function closePopup() {
  document.getElementById("whatsapp-popup").classList.remove("active");
}
