import { useState } from "react";

const useRegister = () => {

    const initialValues = { firstName:'', lastName:'', username:'',  email:'',  password:'', confirmPassword:'' }
    const [ formValues, setFormValues ] = useState(initialValues);
    const [ formErrors, setFormErrors ] = useState({});
    const [ isSubmit, setIsSubmit ] = useState(false);

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
          errors.firstName = 'First name is required';
        }
        if (!values.lastName) {
          errors.lastName = 'Last name is required!';
        }
        if (!values.username) {
          errors.username = 'Username is required!';
        }
        if (!values.email) {
          errors.email = 'Email is required!';
        } else if(!regex.test(values.email)) {
          errors.email = 'Invalid email format';
        }
        if (!values.password) {
          errors.password = 'Password is required!';
        } else if (values.password.length < 6 || values.password.length > 14 ) {
          errors.password = "Password must be between 6 and 14 charaters!";
    
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Confirm password is required!';
    
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = 'Password does not match!'
    
        }
        return errors;
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      }
    

    return {
        formValues,
        formErrors,
        handleChange,
        handleSubmit
    }
}
export default useRegister