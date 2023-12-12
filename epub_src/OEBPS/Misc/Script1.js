"use strict";

const LANG_LIST = ["zh-hans", "zh-hant", "en"];
const html = document.documentElement;
let hiddenElems = [];
function toggle_htmlClass(lang) {
  html.lang = (lang === "all") ? "en" : lang;
  if (lang === "all") {
    html.classList.add("is-multilingual");
    html.classList.remove("not-multilingual");
  } else {
    html.classList.remove("is-multilingual");
    html.classList.add("not-multilingual");
  }
}
function showAndHideLang(lang) {
  hiddenElems.forEach((elem) => elem.hidden = false);
  if (lang === "all") return;
  hiddenElems = LANG_LIST.filter((it) => {
    return it !== lang;
  }).reduce((result, it) => {
    return result.concat(Array.from(html.querySelectorAll("[lang=" + it +"]")));
  }, []);
  hiddenElems.forEach((elem) => elem.hidden = true);
}
function switchLang(lang) {
  toggle_htmlClass(lang);
  showAndHideLang(lang);
}