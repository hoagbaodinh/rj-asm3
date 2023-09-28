import { Outlet } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootPage;

export function currentUserLoader() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser;
}
