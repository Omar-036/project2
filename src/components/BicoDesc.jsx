import React from "react";

const BigOWebsite = () => {
  return (
    <div className="flex gap-12 px-12 py-24 bg-gray-300">
      <div className="text flex flex-col ">
        <h1 className="text-4xl font-bold mb-8">Welcome to Big(O)</h1>
        <p className="text-lg  mb-6 ml-4">
          Big(O) is your ultimate guide to understanding data structures and
          algorithms. Our mission is to simplify complex topics by visualizing
          and animating them.
        </p>
        <p className="text-lg  mb-6 ml-4">
          Whether you're a beginner or an experienced developer, Big(O) provides
          intuitive explanations and interactive demonstrations to help you
          grasp fundamental concepts with ease.
        </p>
        <p className="text-lg  mb-6 ml-4">
          Explore our collection of tutorials, visualizations, and animations to
          master data structures and algorithms like never before.
        </p>
      </div>
      <div className="image  w-full ">
        <img
          className="rounded-xl object-cover h-[400px] w-full"
          src="https://source.unsplash.com/VT4rx775FT4"
          alt=""
        />
      </div>
    </div>
  );
};

export default BigOWebsite;
