import "./App.css";
import Header from "@/components/Header";
import Message from "@/components/Message";
import DEditor from "@/components/DEditor";

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
