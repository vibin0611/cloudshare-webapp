import React from "react";

export const CTASection = () => {
  return (
    <section className="bg-purple-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">

        {/* Text */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>

          <span className="block text-purple-100">
            Create your account today.
          </span>
        </h2>

        {/* Button */}
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-semibold text-purple-600 transition-colors duration-200 hover:bg-purple-50"
            >
              Sign up for free
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;