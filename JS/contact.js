document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector(".btn-danger");
  const form = document.querySelector("#contact-form"); 
  if (sendButton && form) {
    sendButton.addEventListener("click", function (event) {
      event.preventDefault();
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      console.log("Form Data:", formData);
      form.reset();
    });
  } else {
    console.error("Form or Send Message button not found!");
  }
});
