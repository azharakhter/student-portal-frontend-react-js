import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { PageHeader } from '../components/header/PageHeader';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../utils/apiUtils';
import { Alert } from '@mui/material';
export const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useNavigate();



    const [formDate, setFormDate] = useState({
        username: '',
        email: '',
        password: ''
    })

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Please enter your email'),
        password: Yup.string().required('Please enter your password'),
    });



    const handleSubmit = async (values) => {

        const response = await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/user/login`, 'POST', values, setLoading, setError);
        


        if (response.status === 200) {
            const token = response.result?.data?.token;
            localStorage.setItem('jwtToken', token);

            setSuccessMessage("You are Login Successfully WellCome Back to dashboard");
            setErrorMessage(null); // Clear any previous error message

            // Redirect to home page after 3 seconds
            setTimeout(() => {
                history('/dashboard/2'); // Redirect to the home page
            }, 3000);

            
        } else if (response.status !== 200) {

            setErrorMessage(`Error is occured ${response?.response?.data?.message}`)   
        }

        console.log("herer after", response);
            

    };
    return (
        <>
            <div className="container-xxl bg-white p-0">
                <Header />
                <PageHeader PageHeading="Login" PageName="Logins" />
                <div className="container newsletter mt-2 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 border rounded p-1">
                            <div className="border rounded text-center p-1">
                                <div className="bg-white rounded text-center p-4">
                                    <h4 className="mb-4">Login for <span className="text-primary text-uppercase">Dashoard</span></h4>
                                    {successMessage && (
                                        <Alert severity="success">{successMessage}</Alert>
                                    )}
                                    {errorMessage && (
                                        <Alert severity="error">{errorMessage}</Alert>
                                    )}
                                    <Container maxWidth="sm">
                                        <Box mt={2} >
                                            <Formik
                                                initialValues={formDate}
                                                validationSchema={validationSchema}
                                                onSubmit={handleSubmit}
                                            >
                                                {({ errors, touched }) => (
                                                    <Form>

                                                        <Field
                                                            as={TextField}
                                                            name="email"
                                                            label="Email"
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            error={errors.email && touched.email}
                                                            helperText={errors.email && touched.email && errors.email}
                                                        />
                                                        <Field
                                                            as={TextField}
                                                            name="password"
                                                            label="Password"
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            type="password"
                                                            size="small"
                                                            error={errors.password && touched.password}
                                                            helperText={errors.password && touched.password && errors.password}
                                                        />
                                                        <Button
                                                            type="submit"
                                                            variant="contained"
                                                            color="primary"
                                                            fullWidth
                                                            size="small"
                                                        >
                                                            Login
                                                        </Button>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </Box>
                                    </Container>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>


        </>
    )
}