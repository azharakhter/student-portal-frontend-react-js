import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/footer';
import { SearchRoomFormSection } from './sections/SearchRoomFormSection';
import { PageHeader } from '../components/header/PageHeader';
import { AboutUsSection } from './sections/AboutUsSection';
import { TeamSection } from './sections/TeamSection';
export const AboutPage = () => {
    return (
        <>

            <div className="container-xxl bg-white p-0">
                <Header />
                <PageHeader PageHeading="About Us" PageName="About"/>
                <SearchRoomFormSection />
                <AboutUsSection />
                <TeamSection/>
                <Footer/>
            </div>


        </>
    )
}