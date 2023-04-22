import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { CityInformation, Options, config } from "../../api/GeoDBApi";
import axios from "axios";
import { GEO_URL } from "../../api/GeoDBApi";
import "./search.css";
import { Button } from "@mui/material";

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState<Options>();

  useEffect(() => {}, [search]);

  const handleSearchChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData.value);
  };

  const getCurrentLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      if (
        position != null &&
        position.coords.latitude != null &&
        position.coords.longitude != null
      ) {
        axios
          .get(
            `${GEO_URL}/cities?minPopulation=100000&location=%2B${position.coords.latitude.toFixed(
              4
            )}%2B${position.coords.longitude.toFixed(4)}`,
            config
          )
          .then((result) => {
            if (result.data.data) {
              const response = result.data.data[0];
              setSearch({
                value: `${response.latitude} ${response.longitude}`,
                label: `${response.name}, ${response.region}, ${response.countryCode}`,
              } as Options);
              onSearchChange(`${response.latitude} ${response.longitude}`);
            }
          });
      }
    });
  };

  const loadOptions = (input: string) => {
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
              label: `${city.name}, ${city.region}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <label htmlFor="search-select" className="search-label">
        Search location:{" "}
      </label>
      <AsyncPaginate
        className="search-select"
        placeholder="Search for city"
        value={search}
        debounceTimeout={600}
        // Error here ?
        // LoadOptions<string, GroupBase<string>, unknown>
        onChange={handleSearchChange}
        loadOptions={loadOptions || []}
      />
      <Button onClick={getCurrentLocation}>
        Check weather of current location
      </Button>
    </>
  );
};

export default Search;
