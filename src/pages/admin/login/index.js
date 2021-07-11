import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {loginUser} from '../../../store/action/user';
import { connect } from 'react-redux';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),

  });



class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        // this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    state = {};

    render() {
        console.log(this.props.loginUser);
        return (
            <Formik
                initialValues={{ email: "", password: "" }}
                // validate={(values) => {
                //     const errors = {};
                //     if (values.email === "") {
                //         errors.email = "Email cannot be blank";
                //     }
                //     return errors;
                // }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                    this.props.loginUser(values);
                }}
            >
                {({ handleChange, handleSubmit, values, errors }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label>Email</label>
                                <input type="text" name="email" onChange={handleChange} value={values.email} placeholder="Enter your Email" />
                                {errors && errors.email &&
                                    <span className="text-danger">
                                        {errors.email}
                                    </span>}
                            </p>
                            <p>
                                <label>Password</label>
                                <input type="password" onChange={handleChange} value={values.password} name="password" placeholder="Enter your Password" />
                                {errors && errors.password &&
                                    <span  className="text-danger">
                                        {errors.password}
                                    </span>}
                            </p>
                            <p>
                                <button type="submit"> Login</button>
                            </p>
                        </form>


                    );
                }}
            </Formik>

        );
    }
}

export default connect(null,{ loginUser })(AdminLogin);