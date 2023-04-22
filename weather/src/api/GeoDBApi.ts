import axios from "axios";

const GeoDBKey = "2bbdad9115msh6d6b04ffb1ce47fp140390jsn0268752f0835";
const GeoDBHost = "wft-geo-db.p.rapidapi.com";
export const GEO_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const config = {
  headers: {
    "X-RapidAPI-Key": GeoDBKey,
    "X-RapidAPI-Host": GeoDBHost,
  },
};

export type CityInformation = {
  city?: string;
  country?: string;
  countryCode?: string;
  id: number;
  latitude: number | string;
  longitude: number | string;
  name: string;
  population: number;
  region: string;
  regionCode: string;
};

export type Options = {
  value: string;
  label: string;
  key: string | number;
};

