import React from "react";

export const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Professionals Worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
            See what our users have to say about CloudShare
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-8">

                {/* User */}
                <div className="flex items-center">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>

                </div>

                {/* Stars */}
                <div className="mt-5 flex">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                </div>

                {/* Message */}
                <blockquote className="mt-4 text-base leading-7 text-gray-600">
                  "{testimonial.message}""
                </blockquote>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;