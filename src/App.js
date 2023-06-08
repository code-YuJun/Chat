import './App.css'
import Editor from '@/components/Editor';
import Header from '@/components/Header';
import Message from '@/components/Message';

function App() {
  return (
    <div id="App">
      <div>
        <Header />
      </div>
      <div>
        <Message />
        <Editor />
      </div>
    </div>
  );
}

export default App;
