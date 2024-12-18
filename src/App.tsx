import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className="col-span-2">

      <NavBar />
      </div>
      <div className="bg-pink-400">aside</div>
      <div className="bg-purple-600">main</div>
    </div>
  );
};
export default App;
