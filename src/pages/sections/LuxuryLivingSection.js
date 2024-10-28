import { Link } from "react-router-dom";
export const LuxuryLivingSection = () => {
    return (
        <>
            
            <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5">
                                <h6 className="section-title text-start text-white text-uppercase mb-3">Shared Living</h6>
                                <h1 className="text-white mb-4">Discover Student Hub</h1>
                                <p className="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <Link href="/rooms" className="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="video">
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

        
        </>
    );
};