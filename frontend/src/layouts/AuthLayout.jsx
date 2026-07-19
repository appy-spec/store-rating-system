import { Link } from "react-router-dom";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">
            Store Rating System
          </h1>
 
          <h2 className="text-2xl font-semibold mt-6">{title}</h2>

          <p className="text-gray-500 mt-2">{subtitle}</p>
          <p className="text-center mt-2">
            Go to Dashboard ?
            <Link to="/" className="text-indigo-600 text-sm ml-2 font-semibold">
              Go Home
            </Link>
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
