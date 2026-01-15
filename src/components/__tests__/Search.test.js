import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../utils/useOnlineStatus", () => jest.fn(() => true));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {},
            {},
            {},
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: MOCK_DATA,
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

it("should Search Res List for pizza text input", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = await screen.findByRole("button", { name: "Search" });
  const searchInput = await screen.findByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(2); // Pizza Hut + Domino's
});

it("should filter Top rated restaurant", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const cardsBeforeFilter = await screen.findAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedButton = screen.getByRole("button", {name:"Top Rated Restaurants"});
  fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.findAllByTestId("resCard");
  expect(cardsAfterFilter.length).not.toBe(1);


});
