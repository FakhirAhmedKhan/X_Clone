import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import LeftSide from "./LeftSide";
import CenterSide from "./CenterSide";
const RightSide = React.lazy(() => import("./RightSide"));

// eslint-disable-next-line react-refresh/only-export-components
const Loading = () => <div className="text-white">Loading...</div>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col md:flex-row gap-4 p-4 text-white">
      <LeftSide />
      <Suspense fallback={<Loading />}>
        <CenterSide />
      </Suspense>
      <RightSide />
    </div>
  </StrictMode>
);
