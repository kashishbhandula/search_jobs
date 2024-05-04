import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function SearchCompany({ filters, setFilters }) {
  const [companyValue, setCompanyValue] = useState();
  const companyDebounceValue = useDebounce(companyValue);
  const searchHandler = (e) => {
    if (e.target.value) setCompanyValue(e.target.value);
  };
  useEffect(() => {
   if(companyDebounceValue)
   	setFilters({ search: companyDebounceValue, ...filters });
  }, [companyDebounceValue]);

  return (
    <div className="search_company">
      <input placeholder="Search Company Name" onChange={searchHandler}></input>
    </div>
  );
}
