export default function CompanyIntro({ jobData }) {
  return (
    <div className="company_intro">
      <div className="company_intro_logo">
        <img src={jobData.logoUrl} alt="logo"></img>
      </div>
      <div className="company_intro_details">
        <span className="company_name"> {jobData.companyName}</span>{" "}
        <span className="company_designation">{jobData.jobRole}</span>{" "}
        <span className="company_location">{jobData.location}</span>
      </div>
    </div>
  );
}
