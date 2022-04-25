import noimg from "../assets/placeholder.png"

const Wanted = ({ result, setToggleShow, setNoScroll }) => {
  const handleClick = () => {
    setToggleShow(false)
    setNoScroll(false)
  }

  return (
    <div className="wanted">
      <span onClick={() => handleClick()} className="closeIcon">
        X
      </span>
      <div className="wanted-info">
        <div className="images">
          <div className="single-image">
            <img
              src={
                result?.images[0]?.original
                  ? result?.images[0]?.original
                  : noimg
              }
              alt="wantedImg"
            />
            <span>{result?.images[0]?.caption}</span>
          </div>
          <div className="single-image">
            <img
              src={
                result?.images[1]?.original
                  ? result?.images[1]?.original
                  : noimg
              }
              alt="wantedImg"
            />
            <span>{result?.images[1]?.caption}</span>
          </div>
          <div className="single-image">
            <img
              src={
                result?.images[2]?.original
                  ? result?.images[2]?.original
                  : noimg
              }
              alt="wantedImg"
            />
            <span>{result?.images[2]?.caption}</span>
          </div>
        </div>
        <div className="wanted-infos">
          <h1>{result?.title}</h1>
          <h4 style={{ textTransform: "capitalize" }}>
            {result?.field_offices?.[0]}
          </h4>
          <div className="wanted-flairs">
            {result?.eyes_raw ? <span>{result?.eyes_raw} Eyes</span> : ""}
            {result?.hair_raw ? <span>{result?.hair_raw} Hair</span> : ""}
            {result?.person_classification ? (
              <span>Classification: {result?.person_classification}</span>
            ) : (
              ""
            )}
            {result?.race_raw ? <span>{result?.race_raw}</span> : ""}
            {result?.sex ? <span>{result?.sex}</span> : ""}
            {result?.status ? <span>Status: {result?.status}</span> : ""}
            {result?.weight_max ? (
              <span>Weight: {result?.weight_max} pounds</span>
            ) : (
              ""
            )}
          </div>
          <p style={{ fontWeight: "700" }}>{result?.description}</p>
          <p>{result?.warning_message}</p>
        </div>
      </div>
    </div>
  )
}
export default Wanted
