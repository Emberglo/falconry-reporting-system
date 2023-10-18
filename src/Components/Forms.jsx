import { Link } from "react-router-dom";
import FormCard from "./FormCard";
import data from "../data";

const Forms = () => {
  return (
    <div>
        <h2>Your Forms</h2>
        <Link to="/add-form">Add New Form</Link>
        <div className="forms-component">
          {!data.length ? (
            <h3>No Forms Found</h3>
          ) : (
            data.map((form) => (
              <FormCard
                key = {form.name}
                id = {form.name}
                species = {form.species}
                date = {form.date}
              />
            // <Pet
            //   // don't do the spread operator - it makes things more expicit to list them out individually - unless it's a pass through component
            //   // {...pet}
            //   key={pet.id}
            //   id={pet.id}
            //   name={pet.name}
            //   animal={pet.animal}
            //   breed={pet.breed}
            //   images={pet.images}
            //   location={`${pet.city}, ${pet.state}`}
            // />
            ))
          )}
        </div>
    </div>
  )
}

export default Forms
