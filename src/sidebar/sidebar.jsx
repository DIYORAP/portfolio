import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaLayerGroup, FaStickyNote, FaComment, FaBars } from "react-icons/fa";
import "./sidebar.css";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    const [dark, setDark] = useState(false);

    const darktheme = () => setDark(!dark);

    useEffect(() => {
        document.body.className = dark ? "light-theme" : "dark-theme";
    }, [dark]);

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className="nav__logo">
                    <img
                        src={dark ? Moon : Sun}
                        alt={dark ? "Dark mode" : "Light mode"}
                        className="moon"
                        onClick={darktheme}
                    />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link"><FaHome /></a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link"><FaUser /></a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link"><FaBriefcase /></a>
                            </li>
                            <li className="nav__item">
                                <a href="#resume" className="nav__link"><FaGraduationCap /></a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link"><FaLayerGroup /></a>
                            </li>
                            <li className="nav__item">
                                <a href="#blog" className="nav__link"><FaStickyNote /></a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link"><FaComment /></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy; 2025 All rights reserved</span>
                </div>
            </aside>

            <div
                className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
                onClick={() => showMenu(!toggle)}
            >
                <FaBars />
            </div>
        </>
    );
};

export default Sidebar;
