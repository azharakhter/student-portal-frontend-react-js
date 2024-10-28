import aboutImage1 from "../../assets/img/pic1.jpg";
import aboutImage2 from "../../assets/img/pic.jpg";
import aboutImage3 from "../../assets/img/pic3.jpg";
import aboutImage4 from "../../assets/img/pic5.jpg";
export const AboutUsSection = () => {
    return (
        <>
            <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7">
                                <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                                <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Student HUB</span></h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row g-3 pb-4">
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                                <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                <p className="mb-0">Rooms</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                                <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                <p className="mb-0">Staffs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                                <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                <p className="mb-0">Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
                            </div>
                            <div className="col-lg-5">
                                <div className="row g-3">
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" alt="" data-wow-delay="0.1s" src={aboutImage1} style={{ marginTop: '25%' }} />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" alt="" data-wow-delay="0.3s" src={aboutImage2} />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-50 wow zoomIn" alt="" data-wow-delay="0.5s" src={aboutImage3} />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" alt="" data-wow-delay="0.7s" src={aboutImage4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};
