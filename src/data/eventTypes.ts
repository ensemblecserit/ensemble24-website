export class EventsGroupType {
  public section: string;
  public events: PostType[];
  constructor(section: string, events: PostType[]) {
    this.section = section;
    this.events = events;
  }
}
export class PostType {
  public id: number;
  public folder: string;
  public img: string;
  public link: string;
  public hideRegister: boolean;
  constructor(
    id: number,
    folder: string,
    img: string,
    link: string,
    hideRegister: boolean
  ) {
    this.id = id;
    this.folder = folder;
    this.img = img;
    this.link = link;
    this.hideRegister = hideRegister;
  }
}
