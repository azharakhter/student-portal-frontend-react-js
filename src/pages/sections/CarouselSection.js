import { CardSlider } from "../../components/commons/cards/slider-card"
import pic from "../../assets/img/pic.jpg";
import pic1 from "../../assets/img/pic1.jpg";

export const CarouselSection = () => {
    return (
        <>
          <div className="container-fluid p-0 mb-5">
                    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <CardSlider image={pic} title="Share a room with other Students" des="Share a room with other Students" />
                            </div>
                            <div className="carousel-item">
                                <CardSlider image={pic1} title="FInd the proper unversity for you" des="Best unversity in ireland "/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
        </>
    );
};
