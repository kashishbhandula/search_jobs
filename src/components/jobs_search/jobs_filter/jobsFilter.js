import Dropdowns from "./dropdowns";
import SearchCompany from "./searchCompany";

export default function JobsFilter({ filters, setFilters }) {
  return (
    <div className="job_filters_container">
      <div className="job_filters">
        <Dropdowns filters={filters} setFilters={setFilters} />{" "}
      </div>
    </div>
  );
}
