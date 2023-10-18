import { Link } from "react-router-dom";

const FormCard = ({id, species, date}) => {
  return (
    <Link to={`/form/${id}`} className=" form-card form-card-link">
      {/* <img src="https://picsum.photos/150" alt="placeholder" /> */}
      <p>{species}</p>
      <p>{date}</p>
      {/* <p>Click To View Form</p> */}
    </Link>
  )
}

export default FormCard;
