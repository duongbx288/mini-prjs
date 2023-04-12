import { SetStateAction, useEffect, useState } from "react";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import {
  CityInformation,
  Options,
  config,
} from "../../api/GeoDBApi";
import axios from "axios";
import Select from "react-select";
import { URL } from "../../api/GeoDBApi";
import { SearchData } from "../../App";

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
  }, [search]);

  const handleSearchChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData.value);
  };

  const onSearch = (a: any) => {
    setSearch(a);
  };

  const loadOptions = (input: string) => {
    console.log('je')
    if (input && input.length > 0) {
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
    } else {return []}
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        value={search}
        debounceTimeout={600}
        // Error here ?
        // LoadOptions<string, GroupBase<string>, unknown>
        onChange={handleSearchChange}
        loadOptions={loadOptions || []}
      />
    </>
  );
};

export default Search;
