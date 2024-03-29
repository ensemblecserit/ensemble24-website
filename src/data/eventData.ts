import { EventsGroupType, PostType } from "./eventTypes";

// folder & id & link name
const pe = "pre-events";
const wk = "workshops";
const cs = "competitions";
const ex = "exhibitions";
const st = "stalls-nd-booths";
const gm = "gaming";

const def = "https://www.instagram.com/ensemble.cse/";

// (id: number, folder: string, img: string, link: string, hideRegister: boolean)
const PreEvents = [
  new PostType(
    101,
    pe,
    "rebound.jpeg",
    "https://www.instagram.com/rebound.cse",
    false
  ),
  new PostType(
    102,
    pe,
    "shootout.jpeg",
    "https://www.instagram.com/p/C3plI4aS2QY/",
    false
  ),
  new PostType(
    103,
    pe,
    "googly.jpeg",
    "https://www.instagram.com/p/C3aYVbSynfI/",
    false
  ),
  new PostType(
    104,
    pe,
    "valorant.jpeg",
    "https://www.instagram.com/p/C3iKQvoyOjX/",
    false
  ),
  new PostType(
    105,
    pe,
    "trollmaking.jpeg",
    "https://www.instagram.com/p/C3nOn9zS88o/",
    false
  ),
  new PostType(
    106,
    pe,
    "gitgithub.jpeg",
    "https://www.instagram.com/p/C3sYhJNy7fD/",
    false
  ),
  new PostType(
    107,
    pe,
    "efootball.jpeg",
    "https://www.instagram.com/p/C3u-5otyiyR/",
    false
  ),
  new PostType(
    108,
    pe,
    "linkedin.jpeg",
    "https://www.instagram.com/p/C30Gnwly6Nj/",
    false
  ),

  new PostType(
    109,
    pe,
    "survivalFittest.jpeg",
    "https://www.instagram.com/p/C35XG3_SleG/",
    false
  ),

  new PostType(
    110,
    pe,
    "uiux.jpeg",
    "https://www.instagram.com/p/C35YAzRSom_/",
    false
  ),

  new PostType(
    111,
    pe,
    "treasure.jpeg",
    "https://www.instagram.com/p/C371ZYzy464/",
    false
  ),
];

const Exhibitions = [
  new PostType(
    200,
    ex,
    "cyber.jpg",
    "https://www.instagram.com/p/C4GPNrIyrRH/",
    true
  ),
  new PostType(
    202,
    ex,
    "roboexpo.jpg",
    "https://www.instagram.com/p/C4GPNrIyrRH/",
    true
  ),
  new PostType(
    203,
    ex,
    "exhibition.jpg",
    "https://www.instagram.com/p/C4XtPV_Sitv/",
    true
  ),
  new PostType(
    204,
    ex,
    "saeExpo.jpeg",
    "https://www.instagram.com/p/C4lBq5jyEtw/",
    true
  ),
];

const Stalls = [
  new PostType(600, st, "food_stall.jpg", def, true),
  new PostType(
    601,
    st,
    "midjourney.jpeg",
    "https://www.instagram.com/p/C4vjiUWSCdF/",
    true
  ),
  new PostType(602, st, "stalls_01.jpg", def, true),
  new PostType(603, st, "stalls_02.jpg", def, true),
  new PostType(604, st, "stalls_03.jpg", def, true),
];

const Workshops = [
  new PostType(
    301,
    wk,
    "bharatdrive.jpg",
    "https://bit.ly/bharat_drive",
    false
  ),

  new PostType(
    302,
    wk,
    "designThinking.jpeg",
    "https://bit.ly/Digital-Design-Thinking-Workshop",
    false
  ),

  new PostType(303, wk, "ar.jpeg", "https://bit.ly/AR_workshops", false),
];

const Gaming = [
  new PostType(
    201,
    ex,
    "vrgame.jpg",
    "https://www.instagram.com/p/C4ItInvSjyO/",
    true
  ),
  new PostType(
    400,
    gm,
    "ps5.jpeg",
    "https://www.instagram.com/p/C4ikmYrSW6e/",
    true
  ),
  new PostType(
    401,
    gm,
    "gamingRoom.jpeg",
    "https://www.instagram.com/p/C4kCRreyrDp/",
    true
  ),
  new PostType(
    402,
    gm,
    "gamingArcade.jpeg",
    "https://www.instagram.com/p/C4kBz9mSppB/",
    true
  ),
  new PostType(403, gm, "XBOX.jpg", def, true),
];

const Competitions = [
  new PostType(
    500,
    wk,
    "hackthon.jpg",
    "https://tinyurl.com/hackathon-ensemble",
    false
  ),

  new PostType(
    501,
    cs,
    "ideathon.jpeg",
    "https://bit.ly/Ensemble_Ideathon",
    false
  ),

  new PostType(
    502,
    cs,
    "soapy.jpeg",
    "https://bit.ly/soapy_football-ensemble",
    false
  ),
  new PostType(503, cs, "prompt.jpeg", "https://bit.ly/prompt-writing", false),
  new PostType(
    504,
    cs,
    "penfight.jpeg",
    "https://bit.ly/Ensemble_pen_fight",
    false
  ),
  new PostType(505, cs, "capturit.jpg", def, false),
  new PostType(505, cs, "escaperoom.jpg", def, false),
];

//
// GALLERY ARRAY
//
export const AllEvents = [
  new EventsGroupType(cs, Competitions),
  new EventsGroupType(gm, Gaming),
  new EventsGroupType(wk, Workshops),
  new EventsGroupType(st, Stalls),
  new EventsGroupType(ex, Exhibitions),
  new EventsGroupType(pe, PreEvents),
];

const sh = "showcases";
export const ShowCasesData = [
  new PostType(1001, sh, "anniversary.jpg", def, true),
  new PostType(1003, sh, "conclave.jpg", def, true),
  new PostType(
    1000,
    sh,
    "freefolks.jpeg",
    "https://www.instagram.com/p/C4qfijWyJWc/",
    true
  ),
  new PostType(1002, sh, "openmic.jpeg", def, true),
  new PostType(1003, sh, "culturals.jpg", def, true),
];
