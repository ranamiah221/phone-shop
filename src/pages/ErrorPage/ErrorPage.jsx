import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  
  return (
    <div className="flex items-center justify-center h-screen text-center">
        <div>
        <h1 className="text-center">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>
      <button className="btn btn-accent mt-3 text-white">Go Home</button>
      </Link>
        </div>
    </div>
  );
};

export default ErrorPage;
