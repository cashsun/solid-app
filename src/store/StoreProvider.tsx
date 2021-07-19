import { createContext, createSelector, splitProps, useContext } from 'solid-js';
import { createStore, SetStoreFunction } from 'solid-js/store';

export interface StoreState {
    count: number
}

export type StoreContext = [StoreState, { [key in StoreAction]?: () => void }];

type StoreAction = "increment" | "decrement";


const initialState: StoreState = {
    count: 0
};

const actions = (setState: SetStoreFunction<StoreState>): { [key in StoreAction]: () => void } => ({
    increment() {
        setState("count", c => c + 1);
    },
    decrement() {
        setState("count", c => c - 1);
    }
});



const StoreContext = createContext<StoreContext>();

export const useCounter = () => {
    const [state] = useStore();
    const [pick] = splitProps(state, ["count"]);
    return pick;
}

export const useActions = ()=>{
    return useStore()[1];
}

export const useStore = () => useContext<StoreContext>(StoreContext);

export default (props: { children: any }) => {
    const [state, setState] = createStore<StoreState>(initialState);
    const store: StoreContext = [
        state,
        actions(setState)
    ];

    return <StoreContext.Provider value={store}>{props.children} </StoreContext.Provider>

}