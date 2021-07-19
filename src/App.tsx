import type { Component } from "solid-js";
import Counter from './components/counter/Counter';
import StoreProvider from "./store/StoreProvider";

const App: Component = () => {
  return (<StoreProvider>
    <p class="text-4xl text-green-700 text-center py-20 bg-blue-400">Hello solid JS!</p>
    <div class="container mx-auto text-center"><Counter /></div>
  </StoreProvider>);
};

export default App;
