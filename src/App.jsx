// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Technologies from "./components/Technologies";
// import Projects from "./components/Projects";

// const App = () => {
//   return(
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//       <div className="absolute top-0 left-0 -z-10 min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

//       <div className="container mx-auto px-4">
//         <Navbar/>
//         <Hero/>
//         <About/>
//         <Technologies/>
//         <Projects/>
//       </div>
//     </div>
//   )
// };

// export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer that stretches entire scrollable page */}
      <div className="fixed top-0 left-0 -z-10 h-full min-h-screen w-full bg-neutral-950" />
      <div className="fixed top-0 left-0 -z-20 min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
      </div>
    </div>
  );
};

export default App;
