import { Suspense } from "react";
import React from "react ";
import Typewriter from "typewriter-effect";

const App = () => {
  const RenderCanvas = React.lazy(() => import("./RenderCanvas"));
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute right-0 z-10 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-fit">
        <span className="w-full text-4xl font-extrabold break-words lg:text-6xl">
          <Typewriter
            options={{
              cursor: "_"
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString('consle')
                .pauseFor(200)
                .deleteChars(3)
                .typeString('sole.log("astroreact')
                .pauseFor(200)
                .deleteChars(5)
                .typeString('layout')
                .pauseFor(200)
                .typeString('.com");')
                .pauseFor(200)
                .start()
            }}
          />
        </span>
      </div>
      <Suspense fallback={null}>
        <div className="h-full animate-fadein">
          <RenderCanvas count={window.innerWidth / 5 + 50} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
