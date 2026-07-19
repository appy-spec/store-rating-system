const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <h2 className="text-sm font-semibold text-gray-500">
          Store Rating System
        </h2>
        <p className="text-gray-600 flex items-center justify-center">
          Built with  <span className="mx-1 text-purple-600">💜</span> by{" "}
          <span className="ml-1 text-sm">
            Rahul Patel
          </span>
        </p>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;