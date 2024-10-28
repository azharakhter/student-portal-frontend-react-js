import { PrimaryHeadingContainer } from "../../components/commons/headings/primaryHeading";
import { CardStaff } from "../../components/commons/cards/card-1";
export const TeamSection = () => {
    return (
        <>
             <div className="container-xxl py-5">
                    <div className="container">
                        <PrimaryHeadingContainer sectionTitle="Our Team" mainTitle="Explore Our" exploreText="Staffs" />
                        <div className="row g-4">
                            <CardStaff/>
                            <CardStaff/>
                            <CardStaff/>
                            <CardStaff/>
                            <CardStaff/>
                            <CardStaff/>
                            <CardStaff/>
                            <CardStaff/>
                            
                        </div>
                    </div>
                </div>
        
        </>
    );
};