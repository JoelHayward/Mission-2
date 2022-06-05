//PRELOADER
const timePeriodInMs = 100000;

setTimeout(function () {
  document.getElementById("preloader").style.display = "none";
});

timePeriodInMs();

// const loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

//Upload image for their drivers license in display_img1
const imgLicense = document.querySelector("imgLicense");
const upload_image = "";

imgLicense.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_image = reader.result;
    document.querySelector(
      ".display_img1"
    ).style.backgroundImage = `url(${upload_image})`;
  });
  reader.readAsDataURL(this.file[0]);
});
