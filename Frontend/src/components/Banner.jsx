import React from "react";
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-20">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className="text-xl">
              Books are man’s best friends. Books are portable and so they are
              easy to carry around. And so books can be read at any time night
              or day, while travelling on a bus or train or flight, and at meal
              time too. Books are published in many languages and in varied
              genres. There are books in fiction and non-fiction categories.
              Each of these categories has many different sections and genres,
              and there are many thousands of titles in each type. Every book
              title has an International Standard Book Number (ISBN) that is
              unique to it, and helps in identifying it.
            </p>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="ml-5 mt-20 w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
