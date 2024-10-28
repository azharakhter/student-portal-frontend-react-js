import { Link } from "react-router-dom"
export const Footer = () => {;
    return (
        <>
            <div className="container-fluid bg-dark text-light footer wow fadeIn mt-5" data-wow-delay="0.1s">
                <div className="container pb-3">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4">
                            <div className="bg-primary rounded p-2 mt-5">
                                <Link to="/"><h1 className="text-white text-center text-uppercase mb-2">studentHub</h1></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, dublin,ireland</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>studenthub@gmail.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social" to="/"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to="/"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to="/"><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to="/"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="row gy-5 g-4">
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                                    <Link className="btn btn-link" to="/login">Posts</Link>
                                    <Link className="btn btn-link" to="/signup">Free Registration</Link>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                    <Link className="btn btn-link" to="/rooms">Share Student Accodmation</Link>
                                    <Link className="btn btn-link" to="/login">Make Post of Accodmation</Link>
                                    <Link className="btn btn-link" to="/login">Budget Resolver</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}