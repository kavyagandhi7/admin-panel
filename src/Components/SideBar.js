import React from 'react'
import {Link} from 'react-router-dom';

export default function SideBar() {
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">

                {/* <!-- Sidebar Start --> */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-light navbar-light">
                        <Link to="index.html" className="navbar-brand mx-4 mb-3">
                            <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                        </Link>
                        <div className="d-flex align-items-center ms-4 mb-4">
                            <div className="position-relative">
                                <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0">Jhon Doe</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                        <div className="navbar-nav w-100">
                            <Link to="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                            <div className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Catelogs</Link>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <Link to='category' className="dropdown-item">Category</Link>
                                    <Link to="product" className="dropdown-item">Products</Link>
                                    <Link to="users" className="dropdown-item">Users</Link>
                                    <Link to="review" className="dropdown-item">Review</Link>

                                </div>
                            </div>
                            <Link to="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</Link>
                            <Link to="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</Link>
                            <Link to="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</Link>
                            <Link to="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</Link>
                            <div className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</Link>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <Link to="signin.html" className="dropdown-item">Sign In</Link>
                                    <Link to="signup.html" className="dropdown-item">Sign Up</Link>
                                    <Link to="404.html" className="dropdown-item">404 Error</Link>
                                    <Link to="blank.html" className="dropdown-item">Blank Page</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Sidebar End --> */}
        </>
    )
}
