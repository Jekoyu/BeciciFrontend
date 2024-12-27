function showAlert(title, message) {
  const alertBox = document.getElementById("custom-alert");
  const alertTitle = document.getElementById("alert-title");
  const alertMessage = document.getElementById("alert-message");
  const alertOkBtn = document.getElementById("alert-ok-btn");
  alertTitle.textContent = title;
  alertMessage.textContent = message;
  alertBox.classList.remove("hidden");
  alertOkBtn.onclick = () => {
    alertBox.classList.add("hidden");
  };
}
