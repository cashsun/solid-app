import { useActions, useCounter } from "../../store/StoreProvider";

export default ()=>{
    const {increment, decrement} = useActions();
    const counter = useCounter();
    return <div>
        <button class="cursor-pointer border border-gray-500 px-4 py-1 rounded-md" onClick={increment}>Add {counter.count}</button>
        <button class="cursor-pointer border border-gray-500 px-4 py-1 rounded-md" onClick={decrement}>Decr {counter.count}</button>
    </div>
}