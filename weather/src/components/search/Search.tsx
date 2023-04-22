import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { CityInformation, config } from "../../api/GeoDBApi";
import axios from "axios";
import { URL } from "../../api/GeoDBApi";
import './search.css';

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {}, [search]);

  const handleSearchChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData.value);
  };

  const onSearch = (a: any) => {
    setSearch(a);
  };

  const loadOptions = (input: string) => {
    return axios
      .get(
        `${URL}/cities?minPopulation=100000&namePrefix=${
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

  return (
    <>
      <label htmlFor="search-select" className="search-label">Search location: </label>
      <AsyncPaginate
      className="search-select"
        placeholder="Search for city"
        value={search}
        debounceTimeout={600}
        // Error here ?
        // LoadOptions<string, GroupBase<string>, unknown>
        onChange={handleSearchChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
