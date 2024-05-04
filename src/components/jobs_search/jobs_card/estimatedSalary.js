import { indianRupee, squareCheck } from "../../../svgs/svgs";

export default function EstimatedSalary() {
  return (
    <div className="estimated_salary">
      <span className="salary_text">
        Estimated Salary:{" "}
        <span className="indian_rupee_icon">{indianRupee}</span>18 - 35 LPA
      </span>
      <span className ="square_check_icon">{squareCheck}</span>
    </div>
  );
}
