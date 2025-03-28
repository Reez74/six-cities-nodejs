import { CityName } from './city-name.enum.js';
import { OfferType } from './offer-type.enum.js';
import { Goods } from './goods.enum.js';
import { User } from './user.type.js';
import { Location } from './location.type.js';

export type OfferId = string;

export type Offer = {
  title: string;
  description: string;
  createdDate: Date;
  city: CityName;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Goods[];
  author: User;
  location: Location;
}
