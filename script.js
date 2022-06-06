//PRELOADER
setTimeout(() => {
  document.getElementById("preloader").style.display = "none";
}, "10000");

//Upload perosns information data to an object
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addInfo);
});

const theirInformation = [];
const addInfo = (ev) => {
  ev.preventDefault();
  const info = {
    id: Date.now(),
    name: document.getElementById("their_name").value,
    email: document.getElementById("their_email").value,
    number: document.getElementById("their_number").value,
    rego: document.getElementById("their_rego").value,
    license: document.getElementById("their_license").value,
    licenseImg: document.getElementById("license_img").value,
  };
  theirInformation.push(info);
  document.querySelector("form").reset();
  console.log(theirInformation);
};

//Upload image for their drivers license in display_img1
const imgLicense = document.querySelector("imgLicense");
const upload_image = "";


