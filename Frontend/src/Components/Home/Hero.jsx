// src/components/Hero.jsx
import React, { useState } from "react";
import heroImage from "../../assets/images/hero.png";
import deliciousImage from "../../assets/images/delecious.png";
import menuvideo from "../../assets/videos/menu-video.mp4";
import { Link } from "react-router-dom";

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideo = () => setIsVideoOpen(true);
    const closeVideo = () => setIsVideoOpen(false);

    return (
        <section className="relative bg-[rgb(255,243,224)]">
            <div className="container mx-auto px-13 py-20 pt-50 flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-lg mb-4">
                        #Special Food 🍇
                    </span>
                    <h1 className="mb-5 text-3xl font-bold capitalize text-default-950 md:text-5xl/snug lg:text-6xl/normal">
                        We Offer <br />
                        <span
                            className="h-64 bg-cover bg-center"
                            width="100"
                            style={{ backgroundImage: `url(${deliciousImage})` }}
                        >
                            Delicious
                        </span>{" "}
                        <span className="text-orange-500">Food</span> <br />
                        And Quick <br /> Service
                    </h1>
                    <p className="mx-auto mb-8 text-lg font-medium text-default-700 md:max-w-md lg:mx-0">
                        Imagine you don’t need a diet because we <br /> provide healthy and
                        delicious food for you!
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Link to="/odernow">
                            <button className="bg-[rgb(245,130,32)] text-white px-10 py-5 font-medium rounded-full shadow hover:bg-[rgb(249,115,22)] transition cursor-pointer">
                                Order Now
                            </button>
                        </Link>

                        {/* Button to open video modal */}
                        <button
                            onClick={openVideo}
                            className="flex items-center text-primary cursor-pointer"
                        >
                            <span class="me-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-400 border-e-transparent"> 
                                <svg stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" > 
                                    <polygon points="5 3 19 12 5 21 5 3" class="fill-orange-500 stroke-none" ></polygon> 
                                </svg> 
                            </span> 
                            <span class="font-semibold text-orange-500">See Our Dishes</span>
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
                    <img
                        src={heroImage}
                        alt="Delicious Food"
                        className="w-full rounded-xl relative z-10"
                    />
                    {/* Decorative shapes */}
                    <div className="absolute top-10 right-10 w-12 h-12 bg-yellow-400 rounded-lg z-0 animate-bounce"></div>
                    <div className="absolute top-20 left-20 w-6 h-6 bg-orange-300 rounded-full z-0 animate-pulse"></div>
                </div>
            </div>

            {/* Transparent Video Modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={closeVideo} // click outside closes modal
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()} // prevent closing when video clicked
                    >
                        <button
                            onClick={closeVideo}
                            className="absolute top-0 right-0 text-white text-2xl font-bold z-10"
                        >
                            &times;
                        </button>
                        <video
                            src={menuvideo}
                            controls
                            autoPlay
                            className="rounded-lg max-w-full max-h-[80vh]"
                        ></video>
                    </div>
                </div>
            )}
        </section>
    );
}
