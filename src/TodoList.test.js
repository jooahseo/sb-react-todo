import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import TodoList from "./TodoList";

it("renders without crash", ()=>{
    render(<TodoList/>);
});

it("matches snapshot", () =>{
    const { asFragment } = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("can add/remove todo", () =>{
    const {queryByText, queryByLabelText} = render(<TodoList/>);
    const taskInput = queryByLabelText("Task");
    const addBtn = queryByText("Add Task")

    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(taskInput, {target:{value:"coding"}});
    fireEvent.click(addBtn);
    const removeBtn = queryByText("X")

    expect(queryByText("coding")).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();

    fireEvent.click(removeBtn);

    expect(queryByText("coding")).not.toBeInTheDocument();
});
