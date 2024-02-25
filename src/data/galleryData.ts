import { Gallery, Photo } from "./galleryTypes";

// name, caption, isLandscape
const LogoLaunch = [
  new Photo("1.webp", "INAUG001", true),
  new Photo("2.webp", "INAUG002", true),
  new Photo("3.webp", "INAUG003", true),
  new Photo("4.webp", "INAUG004", false),
  new Photo("5.webp", "INAUG005", true),
  new Photo("6.webp", "INAUG006", true),
  new Photo("7.webp", "INAUG007", true),
  new Photo("8.webp", "INAUG008", true),
  new Photo("9.webp", "INAUG009", true),
  new Photo("10.webp", "INAUG010", true),
  new Photo("11.webp", "INAUG011", true),
  new Photo("12.webp", "INAUG012", true),
  new Photo("13.webp", "INAUG013", true),
  new Photo("14.webp", "INAUG014", true),
  new Photo("15.webp", "INAUG015", true),
  new Photo("16.webp", "INAUG016", true),
  new Photo("17.webp", "INAUG017", true),
  new Photo("18.webp", "INAUG018", true),
  new Photo("19.webp", "INAUG019", false),
];
const PreEvents = [
  new Photo("1.webp", "PRE001", true),
  new Photo("2.webp", "PRE002", true),
  new Photo("3.webp", "PRE003", true),
  new Photo("4.webp", "PRE004", true),
  new Photo("5.webp", "PRE005", false),
  new Photo("6.webp", "PRE006", true),
  new Photo("7.webp", "PRE007", true),
  new Photo("8.webp", "PRE008", true),
  new Photo("9.webp", "PRE009", true),
];
const PrevFest = [
  new Photo("1.webp", "LEGACY001", true),
  new Photo("2.webp", "LEGACY002", true),
  new Photo("3.webp", "LEGACY003", true),
  new Photo("4.webp", "LEGACY004", true),
  new Photo("5.webp", "LEGACY005", true),
  new Photo("6.webp", "LEGACY006", true),
  new Photo("7.webp", "LEGACY007", true),
  new Photo("8.webp", "LEGACY008", true),
  new Photo("9.webp", "LEGACY009", true),
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
  new Gallery(ll, "Logo Launch", LogoLaunch),
  new Gallery(pe, "Pre-Events", PreEvents),
  new Gallery(pf, "Previous Fest Gallery", PrevFest),
];
