import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className="ml-4">
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <div>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                </div>
                <div>

                    <label htmlFor="email">Email address:</label>

                    <div>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <div>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;