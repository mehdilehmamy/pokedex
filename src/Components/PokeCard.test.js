import { render} from '@testing-library/react';
import ReactDOM from "react-dom";
import "jest-dom/extend-expect";
import PokeCard from "./PokeCard";

it("renders the page without crashing", ()=> {
    const div = document.getElement("div");
    ReactDOM.render(<PokeCard/>, div);
})

it("renders the elements correctly", ()=> {
    const {getByTestId} = render(<PokeCard/>);
    expect(getByTestId("pokemoncard")).toHaveTextContent("#");
})