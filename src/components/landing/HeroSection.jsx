import dashboard from "../../assets/dashboard.png";
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">

      {/* Decorative background circles */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/40"></div>

      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40"></div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero Content */}
        <div className="pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-20 lg:pt-32">

          <div className="text-center">

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">

              <span className="block">
                Share Files Securely with
              </span>

              <span className="block text-purple-600">
                CloudShare
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-base text-gray-500 sm:text-lg md:text-xl">
              Upload, manage, and share your files securely.
              Accessible anywhere, anytime.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex justify-center gap-4">

              {/* Get Started */}
              <button
                className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-purple-700 hover:shadow-lg"
              >
                Get Started
              </button>

              {/* Sign In */}
              <button
                className="rounded-lg border-2 border-purple-600 bg-white px-6 py-3 font-semibold text-purple-600 shadow-md transition duration-300 hover:bg-purple-50 hover:shadow-lg"
              >
                Sign In
              </button>

            </div>

          </div>

        </div>

        {/* Dashboard Image */}
        <div className="relative mx-auto max-w-5xl pb-20">

          <div className="overflow-hidden rounded-xl border border-purple-100 bg-white shadow-2xl">

            <img
              src={dashboard}
              alt="CloudShare Dashboard"
              className="h-auto w-full"
            />

          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-8 rounded-lg">
            
          </div>

        </div>
        <div className="mt-8 text-center">
          <p className="mt-4 text-base text-gray-500">
            All your files are encrypted and stored securely with enterprise-grade security protocols.
          </p>
          <br></br>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;