import { useState } from "react";
import formData from "/src/data/formData.json";

console.log(formData);
const Form = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formResult, setFormResult] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // You can add validation logic here if needed
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormResult(e);
    const errors = validateForm(formValues);
    console.log("validando errores");
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit it
      console.log("Form is valid, submitting...");
      console.log(formResult);
    } else {
      console.log(errors);
      // Form has errors, update state to display them
      setFormErrors(errors);
    }
  };

  const validateForm = (values) => {
    // Add your validation logic here
    let errors = {};
    formData.forEach((element) => {
      // Example validation: required fields
      // Dentro de la función validateForm
      if (element.required && !values[element.id]) {
        errors[element.id] = `${element.title} is required`;
      }

      // You can add more validation rules based on element.type if needed
    });
    return errors;
  };
  return (
    <div>
      {" "}
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        {formData.map((element) =>
          generator(element, handleInputChange, formErrors)
        )}
        <button type="submit">Submit</button>
      </form>
      ;{" "}
    </div>
  );
};

const generator = (element, handleInputChange, formErrors) => {
  return (
    <div key={element.id}>
      <label htmlFor={element.id}>{element.title}</label>
      {element.type === "select" ? (
        <select key={element.id} name={element.id} onChange={handleInputChange}>
          {element.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      ) : (
        <>
          <input
            key={element.id}
            type={element.type}
            name={element.id}
            placeholder={element.placeholder}
            onChange={handleInputChange}
          />
          {formErrors && formErrors[element.id] && (
            <span>{formErrors[element.id]}</span>
          )}
        </>
      )}
    </div>
  );

  /*
  switch (element.type) {
    case "email":
      return  <input key={element.id} type="email" />;
      break;

    case "password":
      return <input key={element.id} type="password" />;
      break;

    default:
      break;
  }

  */
};
export default Form;
