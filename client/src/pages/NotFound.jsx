import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <TbError404 className="text-danger" size="4em" />
      <p className="lead">Sorry, this page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Return to Home Page
      </Link>
    </div>
  )
}

export default NotFound