import AnimatedText from "./AnimatedText";
import "./App.css";

function App() {
  return (
    <div className="bg-yellow-400 h-screen text-8xl flex flex-col gap-1 justify-center items-center">
      <AnimatedText children={"STAGGERED"} />
      <AnimatedText children={"STAGGERED"} />
      <AnimatedText children={"STAGGERED"} />
    </div>
  );
}

export default App;
