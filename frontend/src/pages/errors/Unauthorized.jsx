import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-red-500">403</h1>

      <p className="mt-4 text-xl">You are not authorized.</p>

      <Link
        to="/"
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Unauthorized;
