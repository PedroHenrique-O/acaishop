import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HomePage />

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
