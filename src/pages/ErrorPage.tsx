import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  
  const error = useRouteError();
  return (
    <>
      <NavBar/>
      <h1 className="text-center font-bold text-3xl translate-y-14">
        {isRouteErrorResponse(error)
          ? "Page Not Found."
          : "An unexpected Error occurred."}
      </h1>
    </>
  );
};

export default ErrorPage;
