import { CardStaff } from "../../components/commons/cards/card-1";
export const CardShowSection = ({ userBooking }) => {
    console.log("BookingData", userBooking);
    return (
        <>
           <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {
                            userBooking?.length > 0 && userBooking?.map((roomBooking) => (
                                <div key={roomBooking?.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <CardStaff  roomBooking={roomBooking} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>  
           
        </>
    );
};
