import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobComponents from "./components/JobComponents";

function App() {
  return (
    <div>
      <Navbar />

      <Hero title="Hey I'm a title!" content="Find your next React Job!!!" />
      {/* <!-- Hero --> */}

      {/* <!-- Developers and Employers --> */}

      <HomeCards />

      {/* <!-- Browse Jobs --> */}
      <JobComponents/>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>

      {/* <script src="js/main.js"></script> */}
    </div>
  );
}

export default App;
