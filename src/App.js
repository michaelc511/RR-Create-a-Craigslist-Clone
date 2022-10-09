// 1 Import the array where you need to iteratit over it
import { postings } from "./postings";

// Import components
import "./App.css";
import Directory from "./Components/Directory";
import Gallery from "./Components/Gallery";
import Searchbar from "./Components/Searchbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <hi>Craiglist</hi>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        {/* 2 pass the array to Gallery */}
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
