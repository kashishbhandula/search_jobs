import AboutCompany from "./aboutCompany";
import CompanyIntro from "./companyIntro";
import EasyApply from "./easyApply";
import EstimatedSalary from "./estimatedSalary";
import MinimumSalary from "./minimumExperience";
import PostedDate from "./postedDate";
import UnlockReferral from "./unlockReferral";

export default function JobsCard() {
  return (
    <div className="jobs_card">
      <PostedDate />
      <CompanyIntro />
      <EstimatedSalary />
      <AboutCompany />
      <MinimumSalary />
      <EasyApply />
      <UnlockReferral />
    </div>
  );
}
