import './App.css';
import Tag from './Components/Tag.js';
import Random from './Components/Random.js';

function App() {
  return (
    <div className="w-full h-screen flex flex-col relative items-center bg-gray-100 background">
      <h1 className="font-semibold text-4xl w-11/12 bg-white mt-6 rounded-md text-center py-2 shadow-md">
        Random GIFS
      </h1>

      <div className="flex gap-6  w-full justify-center mt-20">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
