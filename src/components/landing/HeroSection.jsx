import React from "react";
import dashboard from "../../assets/dashboard.png";

const HeroSection = ({ openSignIn, openSignUp }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/40" />

      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="py-20 text-center lg:py-28">

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block">
              Share Files Securely with
            </span>

            <span className="block text-purple-600">
              CloudShare
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-500">
            Upload, manage, and share your files securely.
            Accessible anywhere, anytime.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button
              onClick={openSignUp}
              className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-purple-700"
            >
              Get Started
            </button>

            <button
              onClick={openSignIn}
              className="rounded-lg border-2 border-purple-600 bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50"
            >
              Sign In
            </button>

          </div>

        </div>

        <div className="mx-auto max-w-5xl pb-16">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <img
              src={dashboard}
              alt="CloudShare Dashboard"
              className="h-auto w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;