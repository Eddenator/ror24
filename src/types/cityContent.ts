export type CityContent = {
  heroImage: string;
  description: string | ((city: string) => string);
  services: string[];
};