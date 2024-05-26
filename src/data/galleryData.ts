import { Gallery, Photo } from "./galleryTypes";

// name, caption, isLandscape
const LogoLaunch = [
  new Photo("1.webp", true),
  new Photo("2.webp", true),
  new Photo("3.webp", true),
  new Photo("4.webp", false),
  new Photo("5.webp", true),
  new Photo("6.webp", true),
  new Photo("7.webp", true),
  new Photo("8.webp", true),
  new Photo("9.webp", true),
  new Photo("10.webp", true),
  new Photo("11.webp", true),
  new Photo("12.webp", true),
  new Photo("13.webp", true),
  new Photo("14.webp", true),
  new Photo("15.webp", true),
  new Photo("16.webp", true),
  new Photo("17.webp", true),
  new Photo("18.webp", true),
  new Photo("19.webp", false),
];
const PreEvents = [
  new Photo("1.webp", true),
  new Photo("2.webp", true),
  new Photo("3.webp", true),
  new Photo("4.webp", true),
  new Photo("5.webp", false),
  new Photo("6.webp", true),
  new Photo("7.webp", true),
  new Photo("8.webp", true),
  new Photo("9.webp", true),
];
const PrevFest = [
  new Photo("1.webp", true),
  new Photo("2.webp", true),
  new Photo("3.webp", true),
  new Photo("4.webp", true),
  new Photo("5.webp", true),
  new Photo("6.webp", true),
  new Photo("7.webp", true),
  new Photo("8.webp", true),
  new Photo("9.webp", true),
];
const Rebound = [
  new Photo("1.webp", false),
  new Photo("10.webp", false),
  new Photo("11.webp", false),
  new Photo("12.webp", false),
  new Photo("13.webp", false),
  new Photo("14.webp", false),
  new Photo("15.webp", false),
  new Photo("16.webp", true),
  new Photo("17.webp", true),
  new Photo("18.webp", false),
  new Photo("19.webp", true),
  new Photo("2.webp", false),
  new Photo("20.webp", false),
  new Photo("21.webp", false),
  new Photo("22.webp", false),
  new Photo("23.webp", false),
  new Photo("24.webp", false),
  new Photo("25.webp", false),
  new Photo("26.webp", true),
  new Photo("27.webp", true),
  new Photo("28.webp", true),
  new Photo("29.webp", false),
  new Photo("3.webp", false),
  new Photo("30.webp", true),
  new Photo("31.webp", false),
  new Photo("32.webp", true),
  new Photo("33.webp", true),
  new Photo("34.webp", true),
  new Photo("4.webp", true),
  new Photo("5.webp", true),
  new Photo("6.webp", false),
  new Photo("7.webp", false),
  new Photo("8.webp", false),
  new Photo("9.webp", false),
];
const Googly = [
  new Photo("1.webp", false),
  new Photo("2.webp", false),
  new Photo("3.webp", false),
  new Photo("4.webp", false),
  new Photo("5.webp", false),
  new Photo("6.webp", false),
  new Photo("7.webp", false),
  new Photo("9.webp", false),
  new Photo("10.webp", false),
  new Photo("11.webp", false),
  new Photo("12.webp", false),
  new Photo("13.webp", false),
  new Photo("14.webp", false),
  new Photo("15.webp", false),
  new Photo("16.webp", false),
  new Photo("17.webp", false),
  new Photo("18.webp", false),
  new Photo("19.webp", false),
  new Photo("20.webp", false),
  new Photo("21.webp", false),
];

// folder names
const ll = "logo-launch";
const pe = "pre-events";
const r = "rebound";
const g = "googly";
const pf = "previous-fest";

//
// GALLERY ARRAY
//
export const Galleries = [
  new Gallery(g, "Googly", Googly),
  new Gallery(r, "Rebound Competition", Rebound),
  new Gallery(ll, "Logo Launch", LogoLaunch),
  new Gallery(pe, "Pre-Events", PreEvents),
  new Gallery(pf, "Previous Fest Gallery", PrevFest),
];
