import { indianRupee, squareCheck } from "../../../svgs/svgs";

export default function EstimatedSalary({ jobData }) {
  return (
    <div className="estimated_salary">
      <span className="salary_text">
        Estimated Salary:{" "}
        <span className="indian_rupee_icon">{indianRupee}</span>
        {jobData.minJdSalary || 0} - {jobData.maxJdSalary} LPA
      </span>
      <span className="square_check_icon">{squareCheck}</span>
    </div>
  );
}
