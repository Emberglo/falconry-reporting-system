import { Link } from "react-router-dom";

const id = 1;

const FormCard = () => {
  return (
    <div className="form-card">
      {/* <img src="https://picsum.photos/150" alt="placeholder" /> */}
      <Link to={`/form/${id}`}>
        <p>Species</p>
        <p>File Date</p>
        {/* <p>Click To View Form</p> */}
      </Link>
    </div>
  )
}

export default FormCard;
