export default function MinimumExperience({ jobData }) {
  return (
    <div className="minimum_salary">
      <span className="minimum_salary_title">Minimum experience</span>
      <span className="salary_text">{jobData.minExp || 0} years</span>
    </div>
  );
}
