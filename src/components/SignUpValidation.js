import React from 'react';
import { useFormik } from 'formik'; //useFormik predefined hook haing helper methods

//formik is designed acc to usage of forms

export const SignUpValidation = () => {

    const formik = useFormik({
        // current values
        initialValues: {
            email: '',
            uname : ''
        },

    
      
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // const [formValues, setFormValues] = useState(intialValues),
    return (
        // handleSubmit, handleChange are helper methods which we can use directly
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="uname">First Name</label>
            <input
                id="uname"
                name="uname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.unmae}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
