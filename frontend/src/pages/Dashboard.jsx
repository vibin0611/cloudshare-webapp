import { UserButton, useUser } from "@clerk/react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="flex items-center justify-between bg-white px-8 py-5 shadow">

        <h1 className="text-2xl font-bold text-purple-600">
          CloudShare
        </h1>

        <UserButton />

      </header>

      {/* Main */}
      <main className="p-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Welcome, {user?.firstName || "User"}!
        </h2>

        <p className="mt-2 text-gray-600">
          Welcome to your CloudShare dashboard.
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">
              My Files
            </h3>

            <p className="mt-2 text-gray-500">
              Manage your uploaded files.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">
              Upload
            </h3>

            <p className="mt-2 text-gray-500">
              Upload new files securely.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">
              Subscription
            </h3>

            <p className="mt-2 text-gray-500">
              Manage your CloudShare plan.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;