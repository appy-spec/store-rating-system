import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-bold text-indigo-600">
            Store Rating System
          </h1>

          <div className="flex gap-4">
            <Link to="/login">
              <Button>Login</Button>
            </Link>

            <Link to="/signup">
              <Button variant="secondary">Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold">
              ⭐ Trusted Store Rating Platform
            </span>

            <h1 className="text-6xl font-extrabold text-gray-900 mt-8 leading-tight">
              Discover.
              <br />
              Rate.
              <br />
              Trust.
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              Submit ratings for stores, explore customer experiences, and help
              build a trustworthy community for everyone.
            </p>

            <div className="mt-10 flex gap-5">
              <Link to="/signup">
                <Button>Get Started</Button>
              </Link>

              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-2xl p-8">
                <h2 className="text-4xl font-bold text-indigo-600">500+</h2>

                <p className="mt-3 text-gray-600">Registered Users</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-8">
                <h2 className="text-4xl font-bold text-green-600">120+</h2>

                <p className="mt-3 text-gray-600">Stores</p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8">
                <h2 className="text-4xl font-bold text-yellow-500">2500+</h2>

                <p className="mt-3 text-gray-600">Ratings</p>
              </div>

              <div className="bg-red-50 rounded-2xl p-8">
                <h2 className="text-4xl font-bold text-red-500">4.8★</h2>

                <p className="mt-3 text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
