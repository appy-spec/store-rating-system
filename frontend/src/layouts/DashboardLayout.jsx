import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = ({ links, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar links={links} />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;