import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-5 text-xl">Page Not Found</p>

      <Link
        to="/"
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;
