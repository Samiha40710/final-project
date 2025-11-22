import React, { useEffect, useState } from "react";

const PageContent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // content thoda delay ke sath animate hoga
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      <p className="mt-4 text-gray-700">This is the page content.</p>
    </div>
  );
};

export default PageContent;
