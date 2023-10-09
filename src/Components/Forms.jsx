import { Link } from "react-router-dom";
import FormCard from "./FormCard";

const Forms = () => {
  return (
    <div>
        <h2>Your Forms</h2>
        <Link to="/add-form">Add New Form</Link>
        <div className="forms-component">
            <FormCard />
        </div>
    </div>
  )
}

export default Forms
