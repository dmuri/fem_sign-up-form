import React, { useState } from 'react';

// 1. Define TypeScript Interfaces
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface ErrorMessages {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

const FormComponent: React.FC = () => {
    // 2. Use TypeScript with useState
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<ErrorMessages>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let currentErrors: ErrorMessages = {};
        if (!formData.firstName) currentErrors.firstName = 'First name cannot be empty';
        if (!formData.lastName) currentErrors.lastName = 'Last name cannot be empty';
        if (!formData.email) currentErrors.email = 'Looks like this is not an email';
        if (!formData.password) currentErrors.password = 'Password cannot be empty';

        setErrors(currentErrors);

        if (Object.keys(currentErrors).length === 0) {
            console.log('Form data submitted:', formData);
            console.log("you did it")
        }
    }

    return (
        <form className="flex flex-col gap-5  bg-white p-12 rounded-xl h-full" onSubmit={handleSubmit} noValidate>
            <div className="w-full">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="outline-1 w-full py-4 px-4 rounded-md border-[1px] border-grayish-blue-neutral"
                />
                {errors.firstName ? <div className="italic text-[12px] text-red-primary text-right">{errors.firstName}</div> : <div className="hidden"></div>}
            </div>
            <div>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="outline-1 w-full py-4 px-4 rounded-md border-[1px] border-grayish-blue-neutral"
                    placeholder="Last Name"
                />
                {errors.lastName ? <div className="italic text-[12px] text-red-primary text-right">{errors.lastName}</div> : <div className="hidden"></div>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="outline-1 w-full py-4 px-4 rounded-md border-[1px] border-grayish-blue-neutral"
                />
                {errors.email ? <div className="italic text-[12px] text-red-primary text-right">{errors.email}</div> : <div className="hidden"></div>}
            </div>
            <div>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="outline-1 w-full py-4 px-4 rounded-md border-[1px] border-grayish-blue-neutral"
                />
                {errors.password ? <div className="italic text-[12px] text-red-primary text-right">{errors.password}</div> : <div className="hidden"></div>}
            </div>

            <button className="text-white bg-green-primary py-5 rounded-lg font-semibold" type="submit">CLAIM YOUR FREE TRIAL</button>
            <p className="text-grayish-blue-neutral text-xs text-center">By click the button, you are agreeing to our <span className="font-bold text-red-primary">Terms and Services</span></p>
        </form>
    );
}

export default FormComponent;