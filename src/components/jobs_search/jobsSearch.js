import { useState } from "react";
import JobsCard from "./jobsCard";
import JobsFilter from "./jobs_filter/jobsFilter";

export default function JobsSearch() {
  const [filters, setFilters] = useState({});
  return (
    <div className="jobs_search">
      <JobsFilter filters={filters} setFilters={setFilters} />
      <JobsCard filters={filters} />
    </div>
  );
}
