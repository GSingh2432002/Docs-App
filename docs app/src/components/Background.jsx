import React from "react";
import packageJson from "../../package.json";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        {/* <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-2xl font-normal">
          Documents.
        </div> */}
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-medium text-[#292929]">
          Docs.
        </h1>
        <footer className="absolute bottom-0 left-0 w-full bg-gray-900 text-white text-center py-2 shadow-md">
          <span className="text-sm opacity-80">
            Version: {packageJson.version}
          </span>
        </footer>
      </div>
    </>
  );
}

export default Background;
