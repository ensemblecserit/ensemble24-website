export class Gallery {
  public folder: string;
  public section: string;
  public photos: Photo[];
  constructor(folder: string, section: string, photos: Photo[]) {
    this.folder = folder;
    this.section = section;
    this.photos = photos;
  }
}
export class Photo {
  public name: string;
  public caption: string;
  public isLandscape: boolean;
  constructor(name: string, caption: string, isLandscape: boolean) {
    this.name = name;
    this.caption = caption;
    this.isLandscape = isLandscape;
  }
}
