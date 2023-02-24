export interface PaisSmall {
  name: Name;
  cca3: string;
  altSpellings: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: Aym;

}

export interface Aym {
  official: string;
  common: string;
}
