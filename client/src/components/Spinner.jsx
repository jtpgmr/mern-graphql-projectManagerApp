import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center spinner-spacing">
      <div className="spinner-border" role={"status"}>
        <span className="sr-only">
        </span>
      </div>
    </div>
  )
}

export default Spinner