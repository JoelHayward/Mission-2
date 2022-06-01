//Upload image
const img_input = document.querySelector("img_input");
const upload_image = "";

img_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_image = reader.result;
    document.querySelector(
      "#display_img"
    ).style.backgroundImage = `url(${upload_image})`;
  });
  reader.readAsDataURL(this.file[0]);
});
