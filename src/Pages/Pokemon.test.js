import { render} from '@testing-library/react';
import ReactDOM from "react-dom";
import "jest-dom/extend-expect";
import Pokemon from "./Pokemon";

it("renders the page without crashing", ()=> {
    const div = document.getElement("div");
    ReactDOM.render(<Pokemon/>, div);
})

it("renders the elements correctly", ()=> {
    const {getByTestId} = render(<Pokemon/>);
    expect(getByTestId("pokemonpage")).toHaveTextContent("Name");
})