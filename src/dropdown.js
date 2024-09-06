function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

function toggleDropdown(dropdownMenu) {
  const dropBar = getAllSiblings(dropdownMenu, dropdownMenu.parentNode);
  dropBar.forEach((drop) => {
    drop.classList.toggle("visible");
  });
}

export { toggleDropdown };
