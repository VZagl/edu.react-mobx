import React from "react";
import { render, screen } from "@testing-library/react";

// https://ru.stackoverflow.com/questions/1359398/react-testing-library-ошибка-expect-tobeinthedocument-is-not-a-function
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("renders Counter", () => {
  render(<App />);
  const element = screen.getByText(/MobX Counter test/i);
  expect(element).toBeInTheDocument();
});
