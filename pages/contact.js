import React, { useState } from "react";
import Header from "../components/Header";
import { useTheme } from "next-themes";
import Head from "next/head";

// Data
import yourData from "../data/portfolio.json";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";

const Contact = () => {
    // states
    const [data, setData] = useState(yourData);
    const [currentTabs, setCurrentTabs] = useState("HEADER");
    const { theme } = useTheme();
    return (
        <div className={`container mx-auto ${data.showCursor && "cursor-none"}`}>
            <Head>
                <title>Contact</title>
            </Head>
            <Header isBlog={true}></Header>
            {data.showCursor && <Cursor />}
            <div className="mt-10">
                {/* HEADER */}
                {currentTabs === "HEADER" && (
                    <div className="mt-10">

                        <div className="flex items-stretch md:items-center border">

                            {/* <div className="w-1/2 p-4 mx-auto text-center ">
                                <h1>Contact Us</h1>
                            </div> */}
                                <div className="w-1/2 p-4 mx-auto text-center ">
                                    <h1 className="text-2xl text-bold">Contact Us</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                    <div className="mt-10">
                                        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                                            Get in touch with us
                                        </h1>
                                        <p>Email address:</p>
                                        <p>Phone number:</p>
                                        <p>Physical address(es), with an accompanying map:</p>
                                        <p>A contact form for enquiries</p>
                                        <p>Links to social media and help and support resources</p>

                                        <div className="mt-10">
                                            {/* <!-- Facebook --> */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                fill="currentColor"
                                                style={{ color: "#1877f2" }}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                            {/* <Socials /> */}
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Contact;