import { useState } from "react";
import AboutCompanyModal from "./aboutCompanyModal";

export default function AboutCompany({ jobData }) {
  const [viewMore, setViewMore] = useState(false);
  return (
    <>
      {" "}
      <div className="about_company">
        <span className="section_title">About Company:</span>
        <span className="section_sub_title">About us</span>
        <div className="company_description_container">
          <p className="company_description">{jobData.jobDetailsFromCompany}</p>
          <span className="view_more" onClick={() => setViewMore(jobData.jobDetailsFromCompany)}>
            View job
          </span>
        </div>
      </div>
      <AboutCompanyModal
        viewMore={viewMore}
        setViewMore={setViewMore}
      />
    </>
  );
}
