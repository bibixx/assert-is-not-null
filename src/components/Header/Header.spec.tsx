import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { expect, test } from "vitest";
import { Header } from "./Header";
import { UserContextProvider } from "@/context/UserContext";
import { MemoryRouter } from "react-router-dom";

test("should render user's name", async () => {
  render(
    <MemoryRouter>
      <UserContextProvider
        value={{
          userData: { name: "John Doe" },
          logIn: () => undefined,
          logOut: () => undefined,
        }}
      >
        <Header />
      </UserContextProvider>
    </MemoryRouter>,
  );

  const trigger = screen.getByTestId("avatar");
  await userEvent.click(trigger);

  const userNameElement = await screen.findByTestId("user-name");
  expect(userNameElement).toHaveTextContent("John");
});

test("should render user's email", async () => {
  render(
    <MemoryRouter>
      <UserContextProvider
        value={{
          userData: { name: "John Doe" },
          logIn: () => undefined,
          logOut: () => undefined,
        }}
      >
        <Header />
      </UserContextProvider>
    </MemoryRouter>,
  );

  const trigger = screen.getByTestId("avatar");
  await userEvent.click(trigger);

  const userNameElement = await screen.findByTestId("email");
  expect(userNameElement).toHaveTextContent("john.doe@example.com");
});
