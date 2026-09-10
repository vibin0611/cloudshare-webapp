export const FeatureSection = ({ features }) => {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for file sharing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            CloudShare provides all the tools you need to manage your digital
            content.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mb-5 inline-flex rounded-md bg-gray-50 p-3 shadow">

                  <Icon
                    size={28}
                    className={feature.iconColor}
                  />

                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {feature.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

