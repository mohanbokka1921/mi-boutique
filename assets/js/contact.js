// contact.js
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // 🔁 Replace your real WhatsApp number below
  const whatsappNumber = "91XXXXXXXXXX";

  const link = `https://wa.me/${whatsappNumber}?text=Hello, I'm ${name}. ${message}`;
  window.open(link, "_blank");
}
