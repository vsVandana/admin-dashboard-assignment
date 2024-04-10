import React from "react";

const StaticNavigation = () => {
  return (
    <div className="p-4 static-navigation ">
      <div className="pb-4">
        <h1 className="text-4xl font-bold">Static Navigation</h1>
        <p className="my-4 text-lg border-2 rounded-xl p-4">
          This page is an example of using static navigation. the top navigation  will become static on scroll. Scroll down this page to see
          an example.
        </p>
      </div>
      <p className="pt-[40rem] text-xl">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</p>
    </div>
  );
};

export default StaticNavigation;
