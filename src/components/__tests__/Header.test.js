import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it("should rander Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button",{name:"Login"});
  // const loginButton = screen.getByText('Login')
  expect(loginButton).toBeInTheDocument();
});

it("should rander Header Component with Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const CartItems = screen.getByText("Cart - (0 Items)");
  expect(CartItems).toBeInTheDocument();
});

it("should rander Header Component with Cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const CartItems = screen.getByText(/Cart/);
  expect(CartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"Logout"});
  expect(logoutButton).toBeInTheDocument();
});