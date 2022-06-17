import { useDispatch } from "react-redux";

export default function CounterControls() {
   const dispatch = useDispatch();
   
   return (
      <div className="CounterControls">
         <button onClick={() => dispatch ({ type: "counter/increment"})}>+</button>
      </div>
   );
}

