import { SetStateAction, useEffect, useState } from "react";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import { CityInformation, Options, config, getLocation } from "../../api/GeoDBApi";
import axios from "axios";
import Select from 'react-select'
import { URL } from "../../api/GeoDBApi";

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState<string>("");

  const [options, setOptions] = useState<CityInformation[]>([]);

  useEffect(() => {
    getLocation(search);
  }, [search]);

  const handleSearchChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const onSearch = (a: any) => {
    setSearch(a);
  }

  const loadOptions = (input: string) => {
    return axios
      .get(`${URL}/cities?minPopulation=100000&namePrefix=${input}`, config)
      .then((response) => {
        console.log(response.data.data);
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

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        value={search}
        debounceTimeout={600}
        onChange={handleSearchChange}
        // Error here
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
