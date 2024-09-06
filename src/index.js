import "./style.css";
import { toggleDropdown } from "./dropdown";
import { navListener, nextPreviousPic } from "./carousel";

function dropdownHover() {
  const dropdownMenu = document.querySelector(".dropdownMenu");
  dropdownMenu.parentNode.addEventListener(
    "mouseover",
    () => toggleDropdown(dropdownMenu),
    false,
  );
  dropdownMenu.parentNode.addEventListener(
    "mouseout",
    () => toggleDropdown(dropdownMenu),
    false,
  );
}
dropdownHover();
navListener();
nextPreviousPic();
