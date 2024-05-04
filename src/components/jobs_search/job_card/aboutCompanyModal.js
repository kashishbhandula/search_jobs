export default function AboutCompanyModal({viewMore, setViewMore }) {
  return (
    viewMore && (
      <div>
        <div className="modal-overlay" onClick={()=>setViewMore(null)}></div>
        <div className="about_company_modal">{viewMore}</div>
      </div>
    )
  );
}
