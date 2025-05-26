import React from 'react'
import { FadeLoader } from "react-spinners";

function Loder() {
  return (
      <div style={{
          width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"
      }}>
      <FadeLoader color="#36d7b7"/>
    </div>
  )
}

export default Loder
