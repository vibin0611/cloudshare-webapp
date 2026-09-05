import { Check } from "lucide-react";

const PricingSection = ({ pricingPlans }) => {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Choose the plan that's right for you
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">

          {pricingPlans.map((plan, index) => (

            <div
              key={index}
              className={`flex flex-col overflow-hidden rounded-lg bg-white shadow-lg ${
                plan.highlighted
                  ? "border-2 border-purple-500 lg:scale-105"
                  : "border border-gray-200"
              }`}
            >

              <div
                className={`px-6 py-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-purple-50 to-white"
                    : ""
                }`}
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>

                  {plan.highlighted && (
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                      Popular
                    </span>
                  )}

                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {plan.description}
                </p>

                <div className="mt-8">

                  <span className="text-4xl font-extrabold text-gray-900">
                    ₹{plan.price}
                  </span>

                  {plan.price > 0 && (
                    <span className="text-gray-500">
                      {" "}/ month
                    </span>
                  )}

                </div>

              </div>

              <div className="flex flex-1 flex-col justify-between bg-gray-50 px-6 pb-8 pt-6">

                <ul className="space-y-4">

                  {plan.features.map((feature, featureIndex) => (

                    <li
                      key={featureIndex}
                      className="flex items-start"
                    >

                      <Check className="h-5 w-5 flex-shrink-0 text-purple-500" />

                      <span className="ml-3 text-base text-gray-700">
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

                <button
                  className={`mt-8 w-full rounded-md px-5 py-3 font-semibold transition ${
                    plan.highlighted
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "border border-purple-200 bg-white text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {plan.cta}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export { PricingSection };