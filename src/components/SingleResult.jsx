import { useState } from "react"
import Wanted from "./Wanted"
import noimg from "../assets/placeholder.png"

const SingleResult = ({ result, setNoScroll }) => {
  const [toggleShow, setToggleShow] = useState(false)

  const handleClick = () => {
    setNoScroll(true)
    setToggleShow(true)
  }

  if (toggleShow) {
    return (
      <Wanted
        result={result}
        setToggleShow={setToggleShow}
        setNoScroll={setNoScroll}
      />
    )
  }

  return (
    <div className="result">
      <div className="image">
        <img
          src={
            result?.images[0]?.original ? result?.images[0]?.original : noimg
          }
          alt="imageof"
          onClick={() => handleClick()}
        />
      </div>
      <div className="info">
        <h3 onClick={() => handleClick()}>{result?.title}</h3>
        <p>{result?.reward_text}</p>
        <p>{result?.description}</p>
        <p>{result?.warning_message}</p>
      </div>
    </div>
  )
}
export default SingleResult
