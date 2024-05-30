import Footer from "../components/Footer";
import Header from "../components/Header";

function Error() {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
          <p className="text-lg text-gray-700">Sorry, an error has occurred. Please try again later.</p>
        </div>
        <Footer />
      </>
    );
}

export default Error;