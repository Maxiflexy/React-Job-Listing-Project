import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListing from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobsListing />

    <ViewAllJobs />
    </>
  )
}

export default App;