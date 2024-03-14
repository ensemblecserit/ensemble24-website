import { EventsGroupType, PostType } from "./eventTypes";

// folder & id & link name
const pe = "pre-events";
const wk = "workshops";
const cs = "competitions";
const ex = "exhibitions";
const st = "stalls";

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
    false
  ),
  new PostType(
    201,
    ex,
    "vrgame.jpg",
    "https://www.instagram.com/p/C4ItInvSjyO/",
    false
  ),
  new PostType(
    202,
    ex,
    "roboexpo.jpg",
    "https://www.instagram.com/p/C4GPNrIyrRH/",
    false
  ),
  new PostType(
    203,
    ex,
    "film.jpeg",
    "https://www.instagram.com/p/C4XtPV_Sitv/",
    false
  ),
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
];

const Competitions = [
  new PostType(
    401,
    wk,
    "hackthon.jpg",
    "https://tinyurl.com/hackathon-ensemble",
    false
  ),

  new PostType(
    402,
    cs,
    "ideathon.jpeg",
    "https://bit.ly/Ensemble_Ideathon",
    false
  ),

  new PostType(
    403,
    cs,
    "soapy.jpeg",
    "https://bit.ly/soapy_football-ensemble",
    false
  ),
];

//
// GALLERY ARRAY
//
export const AllEvents = [
  new EventsGroupType(cs, Competitions),
  new EventsGroupType(wk, Workshops),
  new EventsGroupType(ex, Exhibitions),
  new EventsGroupType(pe, PreEvents),
  // new EventsGroupType(st, PreEvents),
];
