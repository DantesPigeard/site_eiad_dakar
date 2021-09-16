/**
 * UTILS MISC
 * v 0.1.2
 * 2021-2021
 * */

// language
export function get_lang() {
  const brownser_is = typeof window !== "undefined";
  let lang = "fr";
  if (brownser_is) {
    lang = localStorage.getItem("lang");
  }
  return lang;
}

export function find_lang(content_arr, name, lang) {
  for (let i = 0; i < content_arr.length; i++) {
    if (content_arr[i].name === name) {
      if (lang === "en") return content_arr[i].label_en;
      else return content_arr[i].label_fr;
    }
  }
  return null;
}

export function content_by_lang(content_arr, name, nothing_match) {
  if (get_lang() === "fr") {
    return find_lang(content_arr, name, "fr");
  } else if (get_lang() === "en") {
    return find_lang(content_arr, name, "en");
  }
  return nothing_match;
}

// String conversion
export function str_unit_to_number(unit, str) {
  str = str.replace(unit, "");
  if (!isNaN(str)) {
    let res = Number(str);
    return res;
  } else return null;
}

