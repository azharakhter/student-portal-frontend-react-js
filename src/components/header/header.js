import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';
export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken ? decodedToken.userId : null;
            setIsLoggedIn(!!userId);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <>
            <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-7 bg-dark d-none d-lg-block">
                            <Link href="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 className="m-0 text-primary text-uppercase">Student Hub</h1>
                            </Link>
                        </div>
                        <div className="col-lg-5">
                          
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="index.html" className="navbar-brand d-block d-lg-none">
                                    <h1 className="m-0 text-primary text-uppercase">Student Hub</h1>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link active">Home</Link>
                                    {!isLoggedIn && <Link to="/login" className="nav-item nav-link">Login</Link>}
                                    {!isLoggedIn && <Link to="/signup" className="nav-item nav-link">Register</Link>}
                                    {isLoggedIn && <Link onClick={() => {
                                        localStorage.removeItem('jwtToken');
                                        window.location.reload();
                                    }} className="nav-item nav-link">Logout</Link>}
                                    {isLoggedIn && <Link to="/dashboard/2" className="nav-item nav-link">Dashboard</Link>}
        
                                    <Link to="/budget-calculator" className="nav-item nav-link ">Find Unversity</Link>                                 
                                    
                                </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
        </>
    )
}