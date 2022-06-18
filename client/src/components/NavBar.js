import React from "react";
import "../App.css";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Hjemmerehabiliteringssystem
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Dashboard">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ExerciseDetail">
                                Aktuell øvelse
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/TrainingProgram">
                                Alle øvelser
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
