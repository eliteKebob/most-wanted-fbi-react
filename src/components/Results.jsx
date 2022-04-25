import SingleResult from "./SingleResult"

const Results = ({ wantedList, setNoScroll }) => {
  return (
    <div className="results">
      {wantedList
        ? wantedList?.items.map((result, idx) => (
            <SingleResult result={result} key={idx} setNoScroll={setNoScroll} />
          ))
        : ""}
    </div>
  )
}
export default Results
