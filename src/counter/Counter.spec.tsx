import Counter from "./Counter";
import {  fireEvent, render } from 'solid-testing-library';
import { Result } from "solid-testing-library/dist/types";
import StoreProvider from '../store/StoreProvider';

describe('counter', ()=>{
    let container: Result["container"];
    let comp: HTMLElement;
    beforeEach(() => {
        ({container} = render(()=><StoreProvider><Counter /></StoreProvider> ));
    });
    
    it('should show correct text', () => {
        expect(container.textContent).toContain("Add");
        fireEvent.click(container.querySelector("button")!)
        expect(container.querySelector("button")?.textContent).toEqual("Add 1");
    });
})