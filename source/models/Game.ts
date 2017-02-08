export interface Game {
  Name: string;
  SupportsAddons: Boolean;
  SupportsVoice: Boolean;
  Order: number;
  Slug: string;
  GameFiles: Array<GameFile>;
  CategorySections: Array<Category>;
  ID: number;
}
interface GameFile {
  FileName: string;
}
interface Category {
  Name: string;
}
