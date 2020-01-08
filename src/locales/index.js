import ar from "./ar.json";
import en from "./en.json";
import de from './de.json';
import pk from './pk.json';
export const names = {
  ar: {
    path: "ar",
    name: "العربية",
    direction: "RTL"
  },
  en: {
    path: "en",
    name: "English",
    direction: "LTR"
  },
  de: {
    path: "de",
    name: "Detuch",
    direction: "LTR"
  },
  pk:{
    path:'pk',
    name:'Pakistan',
    direction:'RTL'
  }
};
export default {
  ar,
  en,
  de,
  pk
};
