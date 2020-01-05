import { decorate, action, observable } from "mobx";
import { FALLBACK_LOCALE } from "../utils/constants";

class LocaleStore {
  lang = localStorage.getItem("locale") || FALLBACK_LOCALE;
  updating = false;

  updateLocale = locale => {
    this.lang = locale;
    localStorage.setItem("locale", locale);
    this.updating = true;

    // ? why doing this?
    // * to fake a changing timeout to display a loader and hide the transitons of lang changes
    setTimeout(() => (this.updating = false), 500);
  };
}
decorate(LocaleStore, {
  lang: observable,
  updating: observable,
  updateLocale: action
});
export default new LocaleStore();
