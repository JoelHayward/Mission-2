//Upload image
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
