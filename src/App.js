import { useState, useEffect } from "react"
import axios from "axios"
import Header from "./components/Header"
import Results from "./components/Results"
import Pagination from "./components/Pagination"

function App() {
  const [wantedList, setWantedList] = useState("")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [noScroll, setNoScroll] = useState(false)

  const fetchWanted = async () => {
    setLoading(true)
    try {
      let config = {
        method: "get",
        url: `https://api.fbi.gov/wanted/v1/list?page=${currentPage}`,
      }
      const response = await axios(config)
      if (response.data) {
        setWantedList(response.data)
        setLoading(false)
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWanted()
    // eslint-disable-next-line
  }, [currentPage])

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    )
  }

  if (noScroll) {
    document.body.classList.add("no-scroll")
  }

  if (!noScroll) {
    document.body.classList.remove("no-scroll")
  }

  return (
    <>
      <Header />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="landing">
        {wantedList !== "" ? (
          <Results wantedList={wantedList} setNoScroll={setNoScroll} />
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default App
