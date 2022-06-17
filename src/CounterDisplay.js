import { useSelector } from "react-redux";


export default function CounterDisplay() {
   const number = useSelector((store) => {
      return store.counter.number;
   });

   return <h1 className='CounterDisplay'>{number}</h1>
}

