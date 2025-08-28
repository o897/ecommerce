import { useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        const handleSubmit = (e) => {
            e.preventDefault();

            try {

                const response = fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    // const errorData = await response.json();
                    throw new Error(errorData.message || "Login failed.")
                }

                navigate('/home')

            } catch (error) {

                console.log(error);
                // setError

            }
        }

    }

    return (
        <div className="login__pg">    
            <form className="form__signin">
                <h1>Welcome back</h1>

                <div className="form__signin-btns">
                    {/* handle login on the frontend if it return user redirect */}
                    <button className="form__signin-btn"><a href="http://localhost:3000/auth/google">Sign in with Google</a></button>
                    <button className="form__signin-btn">Sign in with Apple</button>
                    <button className="form__signin-btn">Sign in with Facebook</button>
                </div>

                <div className="form__signin-input">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" onChange={handleChange} value={formData.email} />
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" onChange={handleChange} value={formData.password} />
                </div>

                <button className="form__signin-btn login" type="submit">Sign in</button>

                <p>Dont have an acoount? <a href="/register">Sign up</a> </p>
                <p><a href='http://localhost:3000/auth/logout'>Logout</a></p>
            </form>
        </div>

    )

}

export default Login;