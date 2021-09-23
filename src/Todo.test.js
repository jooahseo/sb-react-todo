import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crash", ()=>{
    render(<Todo/>);
});

it("matches snapshot", ()=>{
    const { asFragment } = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
});
