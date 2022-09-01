const d = document,
  ls = localStorage;
let themeSaved = ls.getItem("DarkOrLight");

/************************************************************************************ 
 
*************************************************************************************/

function toChangeThemeBtnIcon(btn) {
  const $btnDarkTheme = d.querySelector(btn).firstElementChild,
    sunIcon = "url('../img/sun.svg')",
    moonIcon = "url('../img/moon.svg')";
  let showIcon;

  themeSaved == "Dark" ? (showIcon = sunIcon) : (showIcon = moonIcon);
  $btnDarkTheme.style.backgroundImage = showIcon;
}

function toChangeThemeColorToDark(darkClass, darkClassPanel) {
  const $listDataDark = d.querySelectorAll("[data-dark]");

  $listDataDark.forEach((e) => {
    if (e.getAttribute("data-dark") == darkClassPanel) {
      e.style.setProperty("background-color", "var(--color-neutro)");
    } else {
      e.classList.add(darkClass);
    }
  });
  ls.setItem("DarkOrLight", "Dark");
  themeSaved = "Dar";
}

function toChangeThemeColorToLight(darkClass, darkClassPanel) {
  const $listDataDark = d.querySelectorAll("[data-dark]");

  $listDataDark.forEach((e) => {
    if (e.getAttribute("data-dark") == darkClassPanel) {
      e.style.setProperty("background-color", "var(--color-black)");
    } else {
      e.classList.remove(darkClass);
    }
  });
  ls.setItem("DarkOrLight", "Light");
  themeSaved = "Light";
}

export default function darkTheme(btn, darkClass, darkClassPanel) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      ls.getItem("DarkOrLight") == "Dark"
        ? toChangeThemeColorToLight(darkClass, darkClassPanel)
        : toChangeThemeColorToDark(darkClass, darkClassPanel);
      toChangeThemeBtnIcon(btn);
    }
  });

  d.addEventListener("DOMContentLoaded", () => {
    if (themeSaved) {
      if (themeSaved == "Dark")
        toChangeThemeColorToDark(darkClass, darkClassPanel);
      if (themeSaved == "Light")
        toChangeThemeColorToLight(darkClass, darkClassPanel);
    } else {
      ls.setItem("DarkOrLight", "Light");
    }
    toChangeThemeBtnIcon(btn);
  });
}

/*************************Maybe it will work *********************/

/* function toChangeThemeColorToLight(darkClass, darkClassPanel) {
  const $listDataDark = d.querySelectorAll("[data-dark]"),
    DarkOrLight = ls.getItem("DarkOrLight");

  $listDataDark.forEach((e) => {
    if (e.getAttribute("data-dark") == darkClassPanel) {
      const $colorPanel = e.style.backgroundColor;

      if ($colorPanel == "var(--color-black)" || $colorPanel == "") {
        e.style.setProperty("background-color", "var(--color-neutro)");
      } else {
        e.style.setProperty("background-color", "var(--color-black)");
      }
    } else {
      e.classList.toggle(darkClass);
    }
  });

  if (DarkOrLight == "Dark") ls.setItem("DarkOrLight", "Light");
  if (DarkOrLight == "Light") ls.setItem("DarkOrLight", "Dark");
} */
