import { dropdownItems } from "./constant";
import GenericDropdown from "./genericDropdown";
import SearchCompany from "./searchCompany";

export default function Dropdowns({ filters, setFilters }) {
  const onSelection = (option, field) => {
    setFilters({ field: option.value, ...filters });
  };
  return (
    <>
      <div className="dropdowns">
        {dropdownItems.map((item) => (
          <div key={item.id}>
            <GenericDropdown
              field={item.field}
              placeholder={item.placeholder}
              options={item.options}
              width={item.width}
              onSelection={onSelection}
            />
          </div>
        ))}
        <SearchCompany filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
}
