const fileInput = document.getElementById("file-upload");
const preview = document.getElementById("preview");
const drag = document.getElementById("drag");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];

  if (file && file.type.startsWith("image/")) {
    const imageURL = URL.createObjectURL(file);
    preview.src = imageURL;
    preview.style.display = "block";

    const avatar = document.getElementById("avatar");
    avatar.style.backgroundImage = `url('${imageURL}')`;
    avatar.style.backgroundSize = "cover";
    // avatar.style.backgroundPosition = "center";
  } else {
    preview.style.display = "none";
    preview.src = "";
    console.warn("Please select a valid image file.");
  }
});

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const image = formData.get("profilePic");
  const fullName = formData.get("fullname");
  const email = formData.get("email");
  const github = formData.get("GitHub");
  const code = Math.floor(10000 + Math.random() * 90000);
  const d = document.getElementById("success");
  d.classList.toggle("show-succ");
  form.classList.toggle("field-hide");
  const theName = document.getElementById("fn");
  theName.textContent = fullName;
  theName.style.background =
    "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))";

  theName.style.webkitBackgroundClip = "text";
  theName.style.webkitTextFillColor = "transparent";

  const emai = document.getElementById("em");
  emai.textContent = email;
  emai.style.color = "hsl(7, 86%, 67%)";
  document.getElementById("cardName").textContent = fullName;
  document.getElementById("gitName").textContent = github;
  document.getElementById("cardCode").textContent = code;
});
