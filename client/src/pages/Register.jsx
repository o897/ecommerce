import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setMessage("Registration successful ✅");
      setFormData({ email: "", password: "" });

      navigate("/home");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Server error");
    }
  };

  return (
    <div className="login__pg">
      <form className="form__signin" onSubmit={handleSubmit}>
        <h1>Create an account</h1>

        <div className="form__signin-btns">
          <button type="button" className="form__signin-btn">
            Sign in with Google
          </button>
          <button type="button" className="form__signin-btn">
            Sign in with Facebook
          </button>
        </div>

        <div className="form__signin-input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>

        <button className="form__signin-btn register" type="submit">
          Sign up
        </button>

        {message && <p>{message}</p>}

        <p>
          Already registered? <a href="/login">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
