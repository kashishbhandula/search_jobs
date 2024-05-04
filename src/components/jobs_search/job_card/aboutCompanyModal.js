export default function AboutCompanyModal({ viewMore, setViewMore }) {
  return (
    viewMore && (
      <div>
        <div className="modal-overlay" onClick={() => setViewMore(null)}></div>
        <div className="about_company_modal">
          <h3 className="job_description_title">Job Description</h3>
          <div className="section_title"> About Company:</div>
          {viewMore}
        </div>
      </div>
    )
  );
}
