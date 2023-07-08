import "./App.css";
import DEditor from "@/components/DEditor";
import Header from "@/components/Header";
import Message from "@/components/Message";

function App() {
  return (
    <div id="App">
      <Header />
      <div className="bottom">
        <Message />
        <DEditor />
      </div>
    </div>
  );
}

export default App;
