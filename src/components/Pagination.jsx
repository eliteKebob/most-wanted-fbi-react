const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      <div className="page-elements">
        {currentPage > 1 ? (
          <p onClick={() => setCurrentPage(currentPage - 1)}>{"<< "}Prev</p>
        ) : (
          <p style={{ color: "darkblue", cursor: "default" }}>{"<< "}Prev</p>
        )}
        <span>Page {currentPage}</span>
        <p onClick={() => setCurrentPage(currentPage + 1)}>Next{" >>"}</p>
      </div>
    </div>
  )
}
export default Pagination
