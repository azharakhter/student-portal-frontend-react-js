import { PrimaryHeadingContainer } from "../../components/commons/headings/primaryHeading";
import { Card } from "../../components/commons/cards/card";
export const ServiceSection = () => {
    return (
        <>
            
            <div className="container-xxl py-5">
                    <div className="container">
                        <PrimaryHeadingContainer sectionTitle="Our Services" mainTitle="Explore Our" exploreText="Servicess" />
                        <div className="row g-4">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
        
        </>
    );
};