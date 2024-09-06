export default async function fetchIcon(icon) {
  try {
    const img = document.querySelector("img");
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=jg54oLLlwsBxffNIVCOtdd3KmDG1NUhJ&s=${icon}`,
      { mode: "cors" },
    );
    const iconData = await response.json();
    img.src = iconData.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
}
