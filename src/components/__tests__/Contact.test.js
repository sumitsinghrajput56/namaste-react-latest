import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () =>{

    beforeAll(() => {
        console.log("before all");
    });

      beforeEach(() => {
        console.log("before each");
    });

    afterAll(() => {
        console.log("after all");
    })

       afterEach(() => {
        console.log("after each");
    })

    it("should load contact us component", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    // Assertion 
    expect(heading).toBeInTheDocument();
});

it("should load button inside contact component", () => {
    render(<Contact/>);
    const button = screen.getByText("Submit");
    // Assertion 
    expect(button).toBeInTheDocument();
});

it("should load placeholder name inside contact component", () => {
    render(<Contact/>);
    const inputName = screen.getByPlaceholderText("Name");
    // Assertion 
    expect(inputName).toBeInTheDocument();
});

it("should load 2 input boxes in the Contact component", () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion 
    expect(inputBoxes.length).not.toBe(3);
});
});