import { app, h } from "hyperapp";
import Actions from "./Actions";
import Container from "./Container";
import IState from "./IState";

describe("Container test", () => {
    let onUpdate: (elm: HTMLElement) => void;
    beforeEach(done => {
        document.body.innerHTML = "";
        const initialState: IState = {
            count: 0
        };
        const Wrapper = (state: IState, actions: Actions) => (
            <div
                oncreate={() => done()}
                onupdate={(elm: HTMLElement) => {
                    onUpdate(elm);
                }} >
                {Container}
            </div>
        );
        app(initialState, new Actions(), Wrapper, document.body);
    });

    it("There should be 2 button elements", () => {
        const buttons = document.querySelectorAll("button");
        expect(buttons.length).toBe(2);
    });

    it("Should down on click button", done => {
        onUpdate = elm => {
            const h1 = elm.querySelector("h1");
            expect(h1.textContent).toBe("-1");
            done();
        };
        const buttons = document.querySelectorAll("button");
        buttons[0].click();
    });

    it("Should up on click button", done => {
        onUpdate = elm => {
            const h1 = elm.querySelector("h1");
            expect(h1.textContent).toBe("1");
            done();
        };
        const buttons = document.querySelectorAll("button");
        buttons[1].click();
    });
});
