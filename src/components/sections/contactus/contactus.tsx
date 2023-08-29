import React from "react";
import "./contactus.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from "react-scroll";

export default function contactus() {
    const navHeight = 80;
    return (
        <>
            <footer className="text-white py-6">
                <div className="container mx-auto">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt text-contactus text-3xl mb-2 fill-contactus"></i>
                                <div className="cta-text">
                                    <h4 className="text-xl font-semibold">Find us</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                            <div className="single-cta">
                                <i className="fas fa-phone text-contactus text-3xl mb-2 fill-contactus"></i>
                                <div className="cta-text">
                                    <h4 className="text-xl font-semibold">Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                            <div className="single-cta">
                                <i className="far fa-envelope-open text-contactus text-3xl mb-2 fill-contactus"></i>
                                <div className="cta-text">
                                    <h4 className="text-xl font-semibold">Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img
                                        src="https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png" className="w-48"
                                        alt="logo"/></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod
                                        tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><i className="fab fa-facebook-f facebook-bg text-2xl mr-2"></i></a>
                                    <a href="#"><i className="fab fa-twitter twitter-bg text-2xl mr-2"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g google-bg text-2xl"></i></a>
                                </div>
                            </div>
                            <div className={"copyright-area flex justify-center align-middle items-center text-sm py-1"}>
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3 className="text-xl font-semibold">Useful Links</h3>
                                    </div>
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <Link
                                                to="hero"
                                                smooth={true}
                                                duration={500}
                                                className="text-white hover:cursor-pointer"
                                                offset={-navHeight}
                                            >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link hover:text-contactus" href="#scrollspyHeading2">About
                                                Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link hover:text-contactus"
                                               href="#scrollspyHeading3">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link hover:text-contactus" href="#scrollspyHeading4">Our
                                                team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link hover:text-contactus"
                                               href="#scrollspyHeading5">Events</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link hover:text-contactus" href="#scrollspyHeading6">Contact
                                                Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className="text-xl font-semibold">Subscribe</h3>
                                </div>
                                <div className="footer-text mb-4">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Email Address"
                                            className="w-full p-2 border border-gray-500 rounded-xl focus:outline-none"
                                        />
                                        <button
                                            className="bg-contactus text-white px-4 py-2 rounded-r hover:bg-indigo-300 focus:outline-none">
                                            <i className="fab fa-telegram-plane fill-contactus"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2023, All Right Reserved <a
                                        href="https://sitpune.edu.in/" className="text-contactus">SIT</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
