import { PrimaryHeadingContainer } from "../../components/commons/headings/primaryHeading";
import { RoomCard } from "../../components/commons/cards/room-card";
import FormModal from "../../components/commons/models/FormModel";
import { useState } from "react";
import UpdateFormModal from "../../components/commons/models/UpdateFormModel";
import DeleteModal from "../../components/commons/models/deleteModel";
import { callApi } from "../../utils/apiUtils";
import { useNavigate } from 'react-router-dom';


export const RoomSection = ({ roomsDate, userData, pathPost }) => {
    const [open, setOpen] = useState(false);
    const [openUpdateFormModel, setOpenUpdateFormModel] = useState(false);
    const navigate = useNavigate();
    const [modelData, setModelData] = useState(false);
    const [modelDataUpdate, setModelDataUpdate] = useState(false);

    const [modelDelete, setModelDelete] = useState(false);
    const [modelDataForDelete, setModelForDelete] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const refreshPage = () => {
        navigate('/dashboard/3', { replace: true });// This will navigate to the current location, effectively refreshing the page
    };



    const handleOpenDelete = (modelRoomData) => {
        setModelForDelete(modelRoomData);
        setModelDelete(true);
    };

    const handleCloseDelete = () => {
        setModelDelete(false);
    };

    const handleDelete = async () => {

        const formData = {
            roomIds: [modelDataForDelete?.id]
        };
        // Call the delete API
        try {
            // Make a POST request to your Node.js backend
            const response = await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/room/delete-rooms`, 'DELETE', formData, setLoading, setError);
            if (response.status === 200) {
                setSuccessMessage("Room information posted successfully.");
                setErrorMessage(null); // Clear any previous error message

                setTimeout(() => {
                    refreshPage()
                    
                    window.location.reload();
                    setModelDelete(false);
                
                    // Redirect to the home page
                }, 3000);
              
            } else if (response.status !== 200) {

                setErrorMessage(`Error is occured ${response?.response?.data?.message}`)
            }
        } catch (error) {
            console.error('Error:', error);
            setError(true);
            setErrorMessage('Error occurred while posting room information. Please try again later.');
        }
        
    };






    const handleOpenUpdate = (modelRoomData) => {
        setModelDataUpdate(modelRoomData);
        setOpenUpdateFormModel(true);
    };

    const handleCloseUpdate = () => {
        setOpenUpdateFormModel(false);
    };





    const handleOpen = (modelRoomData) => {
        setModelData(modelRoomData);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>

            <div className="container-xl py-5">
                <div className="container">
                    {pathPost && <PrimaryHeadingContainer sectionTitle="Our Rooms" mainTitle="Rooms" exploreText="Discover Our" />}
                    <div className="row g-6">
                        {
                            roomsDate?.length > 0 && roomsDate?.map((room) => (
                                <div key={room?.id} className="col-lg-4 col-md-6 mt-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <RoomCard key={room?.id} room={room} handleOpen={handleOpen} pathPost={pathPost} handleOpenUpdate={handleOpenUpdate} handleOpenDelete={handleOpenDelete} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <FormModal open={open} handleClose={handleClose} modelData={modelData} />
            <UpdateFormModal openUpdateFormModel={openUpdateFormModel} handleCloseUpdate={handleCloseUpdate} modelDataUpdate={modelDataUpdate} userData={userData} />

            <DeleteModal modelDelete={modelDelete} handleCloseDelete={handleCloseDelete} handleDelete={handleDelete} errorMessage={errorMessage} successMessage={ successMessage} />
        </>
    );
};
RoomSection.defaultProps = {
    pathPost: true
};
