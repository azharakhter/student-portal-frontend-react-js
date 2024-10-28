import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { SearchRoomFormSection } from './sections/SearchRoomFormSection';
import { PageHeader } from '../components/header/PageHeader';
export const BookingPage = () => {
    return (
        <>

            <div className="container-xxl bg-white p-0">
                <Header />
                <PageHeader PageHeading="Booking" PageName="Booking"/>
                <SearchRoomFormSection />
                <Footer/>
            </div>


        </>
    )
}