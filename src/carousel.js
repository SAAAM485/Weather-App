function nextPic() {
  const currentPic = document.querySelector(".pic.visible");
  const nextPic =
    currentPic.nextElementSibling || currentPic.parentNode.firstElementChild;
  const currentNav = document.querySelector(".nav.visible");
  const nextNav =
    currentNav.nextElementSibling || currentNav.parentNode.firstElementChild;
  currentPic.classList.remove("visible");
  nextPic.classList.add("visible");
  currentNav.classList.remove("visible");
  nextNav.classList.add("visible");
}

function previousPic() {
  const currentPic = document.querySelector(".pic.visible");
  const previousPic =
    currentPic.previousElementSibling || currentPic.parentNode.lastElementChild;
  const currentNav = document.querySelector(".nav.visible");
  const previousNav =
    currentNav.previousElementSibling || currentNav.parentNode.lastElementChild;
  currentPic.classList.remove("visible");
  previousPic.classList.add("visible");
  currentNav.classList.remove("visible");
  previousNav.classList.add("visible");
}

function navToPic(event) {
  const navId = event.target.id;
  const picId = navId.slice(0, 2);
  console.log(navId);
  console.log(picId);
  const currentPic = document.querySelector(".pic.visible");
  const currentNav = document.querySelector(".nav.visible");
  const navPic = document.querySelector(`#${picId}`);
  const nav = document.querySelector(`#${navId}`);
  currentPic.classList.remove("visible");
  currentNav.classList.remove("visible");
  console.log(navPic);
  console.log(nav);
  navPic.classList.add("visible");
  nav.classList.add("visible");
}

function navListener() {
  const navs = document.querySelectorAll(".nav");
  navs.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      navToPic(event);
    });
  });
}

function nextPreviousPic() {
  const next = document.querySelector("#drop1");
  const previous = document.querySelector("#drop2");
  next.addEventListener("click", nextPic);
  previous.addEventListener("click", previousPic);
}

export { navListener, nextPreviousPic };
