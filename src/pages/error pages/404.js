import React from "react";
import { Link } from "react-router-dom";
const Page_404 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4">
      <img
        src="https://startbootstrap.github.io/startbootstrap-sb-admin/assets/img/error-404-monochrome.svg"
        alt="404"
        className="w-96"
      />
      <p className="text-2xl font-semibold">
        This requested URL was not found on this server.
      </p>
      <Link to="/" className="underline text-blue-600 text-lg">
        {" "}
        Return to Dashboard
      </Link>
    </div>
  );
};

export default Page_404;
