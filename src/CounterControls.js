import { useDispatch } from "react-redux";

export default function CounterControls() {
   const dispatch = useDispatch();
   
   return (
      <div className="CounterControls">
         <button onClick={() => dispatch ({ type: "counter/increment"})}>+</button>
         <button onClick={() => dispatch ({ type: "counter/reset"})}>reset</button>
         <button onClick={() => dispatch ({ type: "counter/decrement"})}>-</button>


         <hr />
         
      </div>
   );
}

