import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { SearchRoomFormSection } from './sections/SearchRoomFormSection';
import { PageHeader } from '../components/header/PageHeader';
import { RoomSection } from './sections/RoomSection';
import { useEffect, useState } from 'react';
import { callApi } from '../utils/apiUtils';

export const RoomsPage = () => {
    const [rooms,setRooms] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        try {
            const FetchRoomDate = async () => {
                const getRoomDate =  await callApi(`http://azhar-env.eba-832eva2b.us-east-1.elasticbeanstalk.com/api/room/get-room?page=1&per_page=10`, 'GET', null, setLoading, setError);
                setRooms(getRoomDate.result.data.data);
            }
            FetchRoomDate();       
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        },[])
    
    return (
        <>

            <div className="container-xxl bg-white p-0">
                <Header />
                <PageHeader PageHeading="Rooms" PageName="Rooms" />
                <SearchRoomFormSection />
                <RoomSection roomsDate={rooms} pathPost={ false } />
                <Footer/>
            </div>


        </>
    )
}