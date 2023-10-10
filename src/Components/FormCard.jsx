import { Link } from "react-router-dom";

const id = 1;

const FormCard = () => {
  return (
    <Link to={`/form/${id}`} className=" form-card form-card-link">
      {/* <img src="https://picsum.photos/150" alt="placeholder" /> */}
      <p>Species</p>
      <p>File Date</p>
      {/* <p>Click To View Form</p> */}
    </Link>
  )
}

export default FormCard;
