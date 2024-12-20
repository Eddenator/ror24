import { CityContent } from '../types/cityContent';
import { defaultCityContent } from './defaultCityContent';
import { cityContent as allCityContent } from './cities';

export { defaultCityContent };
export const cityContent: { [key: string]: CityContent } = allCityContent;