import { useEffect, useState } from "react";
import AboutCompany from "./aboutCompany";
import CompanyIntro from "./companyIntro";
import EasyApply from "./easyApply";
import EstimatedSalary from "./estimatedSalary";
import MinimumExperience from "./minimumExperience";
import PostedDate from "./postedDate";
import UnlockReferral from "./unlockReferral";

export default function JobCard({ jobData, setPageNumber }) {
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setPageNumber((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="jobs_card">
        <PostedDate />
        <CompanyIntro jobData={jobData} />
        <EstimatedSalary jobData={jobData} />
        <AboutCompany jobData={jobData} />
        <MinimumExperience jobData={jobData} />
        <EasyApply />
        <UnlockReferral />
      </div>
    </>
  );
}
