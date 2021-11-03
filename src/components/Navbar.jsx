import React from "react";

const Navbar = () => {


    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">

                <a className="navbar-brand" href="#"><img className="logo" src={"nombreDeMiLogo"} alt="Logo Cristian Rios" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#fff"}}><i class="fas fa-hamburger"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" >Experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" >Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" >Contacto</a>
                        </li>
                    </ul>
                    <div className="d-flex social-media">
                        <ul class="navbar-nav ml-auto nav-flex-icons">
                        
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;