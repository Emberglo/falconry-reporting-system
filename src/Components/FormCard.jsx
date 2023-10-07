import { Link } from "react-router-dom";

const id = 1;

const FormCard = () => {
  return (
    <div className="form-card">
      <img src="https://picsum.photos/150" alt="placeholder" />
      <p>Species</p>
      <p>File Date</p>
      <Link to={`/form/${id}`}>View Form</Link>
    </div>
  )
}

export default FormCard;
