import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SmsDetection from "./pages/SmsDetection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FileUpload from "./components/FileUpload";
import Choice from "./pages/Choice";
import Instruction from "./pages/Instruction";

const App = () => {
  function Layout() {
    return (
      <div>
        <ScrollToTop />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    );
  }
  const Router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/choice", element: <Choice /> },
        { path: "/sms-detection", element: <SmsDetection /> },
        { path: "/upload-multiple-sms", element: <FileUpload /> },
        { path: "/instruction", element: <Instruction /> },
      ],
    },
  ]);

  return (
    <>
      <div className="w-full h-full px-[80px]">
        <RouterProvider router={Router} />
      </div>
    </>
  );
};

export default App;
