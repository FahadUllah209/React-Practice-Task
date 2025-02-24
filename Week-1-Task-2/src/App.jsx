import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("form data", data);
    reset(); 
  }

  return (
    <div className="form-container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstname", { required: "First Name is required" })}
            placeholder="Enter First Name"
          />
          {errors.firstname && (
            <span className="error">{errors.firstname.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastname", { required: "Last Name is required" })}
            placeholder="Enter Last Name"
          />
          {errors.lastname && (
            <span className="error">{errors.lastname.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter email"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            id="contact"
            {...register("contact", {
              required: "Contact is required",
              minLength: {
                value: 11,
                message: "Contact number must be exactly 11 digits",
              },
              maxLength: {
                value: 11,
                message: "Contact number must be exactly 11 digits",
              },
            })}
            placeholder="Enter Mobile number"
          />
          {errors.contact && (
            <span className="error">{errors.contact.message}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;