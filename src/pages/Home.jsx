import React from "react";
import pic2 from "../assets/pic2.jpg";
import { TextAnimation } from "../actions/TextAnimation";
import home from "../assets/home.jpg";
import hotel from "../assets/hotel.jpg";
import phone from "../assets/phone.png";
import factory from "../assets/factory.jpg";
import { CardComponent } from "../components/CardComponent";
import { Link } from "react-router-dom";
import { BottomBar } from "../components/BottomBar";

export const Home = () => {
  return (
    <div>
      <div className="relative w-full pb-[50%] pt-4">
        <img
          src={pic2}
          alt="Pest Control"
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-black font-bold px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
              EXPERT PEST CONTROL: YOUR SOLUTION TO A PEST-FREE ENVIRONMENT
            </div>
            <TextAnimation
              text={
                <div className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black font-bold px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-4">
                  Don't let pests disrupt your business. Rely on Canada's
                  premier pest control specialists. No matter the size of the
                  infestation, we're here to provide the solution you need.
                </div>
              }
              animationDelay={0.3}
            />
            <div className="pt-8 sm:pt-12 md:pt-16" />
            <div className="flex justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
              <Link
                to={"/contact-us"}
                className="hover:text-grey-shade bg-letter-color hover:bg-black-shade font-semibold rounded-lg text-sm sm:text-md px-3 sm:px-5 py-2.5 mb-2 dark:bg-letter-color dark:hover:bg-letter-color w-full sm:w-auto sm:flex-grow md:w-1/2 max-w-[300px]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="text-3xl text-black font-normal text-center px-8 md:px-72">
          WELCOME TO CHAMPION PEST CONTROL
        </div>

        <div className="text-xl pt-5 text-black font-normal text-grey-shade2 text-center px-8 md:px-72">
          Our insect control service consistently meets high-quality standards
          and norms. This is achieved through our team of skilled experts, a
          robust quality assurance program, and detailed documentation of our
          findings and services. Together, these elements ensure that you
          receive top-notch, reliable pest control every time.
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row justify-between pt-20 mx-8 md:mx-20 space-y-8 md:space-y-0">
        <CardComponent
          img={home}
          title={"Residential"}
          description={
            "At Champion Pest Control, we prioritize your home’s safety and comfort. Our residential pest control services effectively protect against various pests, ensuring a healthy, pest-free environment for your family."
          }
        />
        <CardComponent
          img={hotel}
          title={"Commercial"}
          description={
            "At Champion Pest Control, we recognize the critical need for a pest-free environment in your business. Our comprehensive commercial pest control services are designed to safeguard your workplace from a wide range of pests, ensuring a healthy and professional setting."
          }
        />
        <CardComponent
          img={factory}
          title={"Industrial"}
          description={
            "At Champion Pest Control, we know how crucial a pest-free environment is for industrial operations. Our comprehensive industrial pest control services protect your facility from a wide range of pests, ensuring a safe and productive workplace."
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between px-8 md:px-16 pt-8 mt-12 bg-brown-shade">
        <div className="items-center">
          <div className="text-2xl mx-8 text-brown-shade2">About Us</div>
          <div className="mt-3 mx-8 font-medium ">
            Welcome to Champion Pest Control! With years of experience and a
            commitment to excellence, we ensure your home or business stays
            pest-free. Our skilled technicians use the latest eco-friendly
            techniques to eliminate ants, rodents, and more. Trust
            Champion Pest Control for reliable service and peace of mind.
          </div>
        </div>
        <div className="items-center mx-8 md:mx-24 mt-8 md:mt-0">
          <div className="text-2xl text-brown-shade2">Links</div>
          <div className="mt-3 font-medium hover:underline">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="mt-1 font-medium hover:underline">
            <Link to={"/services"}>Services</Link>
          </div>
          <div className="mt-1 font-medium hover:underline">
            <Link to={"/contact-us"}>Contact Us</Link>
          </div>
        </div>
        <div className="items-center mx-8 mt-8 md:mt-0">
          <div className="text-2xl text-brown-shade2">Contact Info</div>
          <div className="mt-3 font-medium">
            <div>{`Address: `}</div>
            <div className="font-normal">Serving South-West Ontario (Middlesex County and Oxford County)</div>
          </div>
          <div className="mt-2">
            <div className="font-medium">Phone:</div>
            <div className="">+1 (647) 806 - 2995</div>
          </div>

          <div className="mt-2">
            <div className="font-medium">Email:</div>
            <div className="">championpestcontrol73@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="pt-16 bg-brown-shade"></div>
      <BottomBar />
    </div>
  );
};
