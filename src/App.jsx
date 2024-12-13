import Grid from './components/Grid';
import { GiOverInfinity } from "react-icons/gi";


function App() {
  return (
    <div className="p-5 text-center">
         <h1 className="text-2xl font-extrabold text-gray-700 flex justify-center items-center">
  Infinity Grid <GiOverInfinity className="ml-2 " />
</h1>

  <p className="text-gray-500">
    <span className="font-bold text-blue-500">Click</span> on a number to highlight its common divisors.
  </p>
  <p className="text-gray-500">
    (<span className="font-bold text-red-500">Red</span> is prime)
  </p>
      <Grid />
    </div>
  );
}

export default App;
