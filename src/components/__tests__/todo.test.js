import { render, screen, cleanup } from "@testing-library/react"
import Todo from "../todo"

afterEach(() => {
    cleanup();
})

test('Should render todo component', () => {
    render(<Todo />)
    const todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('Hi')
})