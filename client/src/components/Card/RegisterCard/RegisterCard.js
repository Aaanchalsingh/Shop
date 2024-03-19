import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegisterCard.css';

const RegisterCard = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setRegistrationSuccess(true);
            navigate('/account/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                    <form onSubmit={handleSubmit}>
                        <div className="fname__input__container reg__input__container">
                            <label className="fname__label input__label">First name</label>
                            <input type="text" className="fname__input register__input" name="firstName" onChange={handleChange} />
                        </div>
                        <div className="lname__input__container reg__input__container">
                            <label className="lname__label input__label">Last name</label>
                            <input type="text" className="lname__input register__input" name="lastName" onChange={handleChange} />
                        </div>
                        <div className="email__input__container reg__input__container">
                            <label className="email__label input__label">Email</label>
                            <input type="email" className="email__input register__input" name="email" placeholder='example@gmail.com' onChange={handleChange} />
                        </div>
                        <div className="password__input__container reg__input__container">
                            <label className="password__label input__label">Password</label>
                            <input type="password" className="password__input register__input" name="password" onChange={handleChange} />
                        </div>
                        <div className="register__button__container">
                            <button type="submit" className="register__button">Create Account</button>
                        </div>
                    </form>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have an account? <Link to="/account/login">Login</Link></div>
                </div>
                {registrationSuccess && <div className="registration-success">Registration successful! You can now <Link to="/account/login">login</Link>.</div>}
            </div>
        </div>
     );
};

export default RegisterCard;
