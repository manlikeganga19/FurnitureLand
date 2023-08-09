import React, {useState} from 'react';


const LoginForm = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleLogin = () => {
        setShowLoginForm(false);
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
            </div>
        </div>
    )
}

export default LoginForm;
