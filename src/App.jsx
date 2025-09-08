import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Studies from "./components/Studies";
import Footer from "./components/Footer";
import About from "./components/About";
import { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


export default function App() {
  const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <About />
        <Experience />
        <Skills />
        <Studies />
      </main>
      <Footer />
    </div>
  );
}
