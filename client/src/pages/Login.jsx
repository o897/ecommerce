import {useState} from "react";
import {useNavigate} from 'react-router-dom';

const navigate = useNavigate();
const Login = () => {

    const {formData,setFormData} = useState({
        email : '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();

        const {name,value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))

        const handleSubmit = (e) => {
            e.preventDefault();

            try {
                
                const response = fetch('http://localhost:3000/login',{
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify(formData)
                });
            
                if(!response.ok) {
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
        <form>
        
        <input type="text" name="email" value={formData.email}/>
        <input type="text" name="password" value={formData.password} />
        <button type="submit">Login</button>
        </form>
    )

}