import axios from "axios";
import { CityInformation, GEO_URL, config } from "../api/GeoDBApi";

class CityService {
  getCities = (input: string) => {
    return axios
      .get(
        `${GEO_URL}/cities?minPopulation=100000&namePrefix=${
          input != null && input.length > 0 ? input : " "
        }`,
        config
      )
      .then((response) => {
        return {
          options: response.data.data.map((city: CityInformation) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  getCurrentLocation = (input: string) => {
    return axios
      .get(
        `${GEO_URL}/cities?minPopulation=100000&namePrefix=${
          input != null && input.length > 0 ? input : " "
        }`,
        config
      )
      .then((response) => {
        return {
          options: response.data.data.map((city: CityInformation) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };
}

export default new CityService();
