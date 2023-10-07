import { Link } from "react-router-dom";
import FormCard from "./FormCard";

const Forms = () => {
  return (
    <div>
      <h2>Your Forms</h2>
      <button>
        <Link to="/add-form">Add A Form</Link>
      </button>
      <div>
        <FormCard />
      </div>
    </div>
  )
}

export default Forms
