import { useEffect, useState } from "react";
import JobCard from "./job_card/jobCard";

export default function JobsCard({filters}) {
  const [jobsData, setJobsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const getJobsData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: pageNumber,
      ...filters
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setJobsData([...jobsData, ...result?.jdList]))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getJobsData();
  }, [pageNumber, filters]);
  return (
    <div className="jobs_card_container">
      {jobsData?.map((jobData) => {
        return <JobCard key={jobData.jdUid} jobData={jobData}  setPageNumber={setPageNumber}/>;
      })}
    </div>
  );
}
