import { Link } from "react-router-dom"
import Form from "./Form"

const Forms = () => {
  return (
    <div>
      <h2>Your Forms</h2>
      <button>
        <Link to="/add-form">Add A Form</Link>
      </button>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Forms
