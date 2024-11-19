import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { CarouselSection } from "./sections/CarouselSection";
import { AboutUsSection } from './sections/AboutUsSection';
import { RoomSection } from './sections/RoomSection';
import { ModelBasic } from '../components/commons/models/ModelBasic';
import { ServiceSection } from './sections/ServiceSection';
import { useEffect, useState } from 'react';
import { callApi } from '../utils/apiUtils';




export const HomePage = () => {
    const [rooms,setRooms] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
    try {
        const FetchRoomDate = async () => {
            const getRoomDate =  await callApi(`${process.env.REACT_APP_API_URL_LOCAL}api/room/get-room?page=1&per_page=10`, 'GET', null, setLoading, setError);
            
            setRooms(getRoomDate?.result?.data?.data);
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
                 <Header/>
                <CarouselSection />
                <AboutUsSection />
                <RoomSection roomsDate={rooms}  />
                <ModelBasic />
                <ServiceSection />
                {/* <TeamSection/> */}
                <Footer />
              
            </div>


        </>
    )
}