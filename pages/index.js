import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <h1 className="text-xl">Ethiopian Cultures</h1>
          

          <section class="text-gray-600 body-font">
            <div class="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
                <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
                    <div class="w-full md:w-1/2 lg:pr-32">
                        <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">There’s a
                            better way to talk with your customers.</h2>
                        <h3
                            class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                            Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
                            and deliver help content right where your customers need it, all in one place, all for one low price.
                        </h3>
                    </div>
                    <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="https://loremflickr.com/g/600/600/girl"/>
                    </div>
                </div>
            </div>
          </section>


          <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div
                      class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                          <br class="hidden lg:inline-block"/>readymade gluten
                      </h1>
                      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                          cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic
                          tumeric truffaut hexagon try-hard chambray.</p>
                
                  </div>
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                  </div>
              </div>
          </section>

          <section class="text-gray-600 body-font bg-white">
            <div class="container mx-auto flex px-5 md:px-40 py-24 flex-row items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <a href="" target="_blank">
                  <img class="object-cover object-center rounded" alt="tip_book" src="https://res.cloudinary.com/link-ethiopia/image/upload/w_500,dpr_2.0,q_auto:good/v000002/ms-0366-e1434709702882_cxh477.jpg" />
                </a>
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-xl text-lg mb-4 font-medium text-gray-500 tracking-tighter">
                  small heading
                </h1>
                <h1 class="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900 tracking-normal 2xl:whitespace-normal whitespace-nowrap">
                  title for the div
                </h1>
                <p class="mt-5 mb-8 leading-relaxed text-xl 2xl:whitespace-normal">
                  <span class="text-yellow-600 font-bold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                    ipsum laudantium, consectetur in deserunt veniam. Asperiores
                    fugiat necessitatibus nisi minus? Maiores ab, tempore quibusdam
                    accusamus neque cum id modi esse.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                    ipsum laudantium, consectetur in deserunt veniam. Asperiores
                    fugiat necessitatibus nisi minus? Maiores ab, tempore quibusdam
                    accusamus neque cum id modi esse.
                    
                  </span>
                </p>
              </div>

            </div>
          </section>



          <div class="content flex py-2">
            <img class="w-48 h-48" src="https://res.cloudinary.com/link-ethiopia/image/upload/w_500,dpr_2.0,q_auto:good/v000002/ms-0366-e1434709702882_cxh477.jpg" alt="" />
            <div class="item-body px-2 ">
              <p
                ref={textOne}
                className="text-yellow-600 font-bold text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </p>
            </div>

          </div>
          <div className="mt-5 ">
            <p
              ref={textOne}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {/* {data.headerTaglineOne} */}
            </p>
            <h1
              ref={textTwo}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
            <h1
              ref={textFour}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineSix}
            </h1>
          </div>

          {/* <Socials className="mt-2 laptop:mt-5" /> */}
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.about}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
