import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { PageHeader } from '../components/header/PageHeader';
import LabTabs from '../components/commons/tabs/tabsPanel';
import Card from '@mui/material/Card';
import { callApi } from '../utils/apiUtils';
import { jwtDecode } from "jwt-decode";
import { Alert } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
export const DashboardPage = () => {
    const { tabId } = useParams();
    const [userData, setUserData] = useState({});
    const [userPost, setUserPost] = useState([]);
    const [userBooking, setUserBooking] = useState([]);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
        // Function to fetch user data based on user ID
        const fetchUserData = async () => {
            setLoading(true);
            try {
                // Retrieve user ID from JWT token in localStorage
                const token = localStorage.getItem('jwtToken');
                const decodedToken = jwtDecode(token);
                const userId = decodedToken ? decodedToken.userId : null;


                if (!userId) {
                    throw new Error('User ID not found in JWT token');
                }

                const headerData = {
                    headers: {
                        Authorization: `Bearer ${token}`
                      }
                }

                // Make API call to fetch user data based on user ID
                const response = await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/user/get-user?id=${userId}`, 'GET', headerData, setLoading, setError, token);


                if (response.status === 200) {
                    const { username,email,id,userPosts,userBooking } = response.result?.data;
                    // Set user data in state
                    const userData = {
                        username,
                        email,
                        id
                    }
                    setUserData(userData);
                    setUserPost(userPosts);
               
                    setUserBooking(userBooking);

                } else if (response.status !== 200) {

                    setErrorMessage(`Error is occured ${response?.response?.data?.message}`)   
                }
            } catch (error) {
                setError(error.message || 'Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        // Fetch user data when the Dashboard component mounts
        fetchUserData();
    }, []); // Empty dependency array to ensure the effect runs only once when the component mounts


    return (
        <>

            <div className="container-xxl bg-white p-0">
                <Header />
                <PageHeader PageHeading="Profile" PageName="Profile" />

                {successMessage && (
                    <Alert severity="success">{successMessage}</Alert>
                )}
                {errorMessage && (
                    <Alert severity="error">{errorMessage}</Alert>
                )}
                <div className="container newsletter mt-2 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row justify-content-center">

                        <div className="col-lg-12 border rounded p-1">
                            <Card>
                                <div className="border rounded text-center p-1">
                                    <div className="bg-white rounded text-center p-4">
                                        <LabTabs userData={ userData} userPost={userPost} userBooking ={userBooking} tabId={tabId} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>


        </>
    )
}