import "./style.css";

const dropMenues = document.querySelectorAll(".drop-down-menu");
const CONTENT_DISPLAY_TYPE = "block";
const MENU_HIDDEN_CLASS = "drop-hidden";
const MENU_SHOWN_CLASS = "drop-shown";

function toggleDropMenu(input) {
  const menu = input;

  if (menu.classList.contains(MENU_SHOWN_CLASS)) {
    menu.classList.remove(MENU_SHOWN_CLASS);
    menu.classList.add(MENU_HIDDEN_CLASS);
    menu.style = `display: none;`;
  } else {
    menu.classList.remove(MENU_HIDDEN_CLASS);
    menu.classList.add(MENU_SHOWN_CLASS);
    menu.style = `display: ${CONTENT_DISPLAY_TYPE};`;
  }
}

function setDropMenuesButtonEvent() {
  dropMenues.forEach((menu) => {
    const btn = menu.querySelector(".drop-btn");
    const content = menu.querySelector(".drop-down-content");
    btn.addEventListener("click", () => {
      toggleDropMenu(content);
    });
  });
}

setDropMenuesButtonEvent();
