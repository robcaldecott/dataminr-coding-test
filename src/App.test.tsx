import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@mui/material";
import { App } from "./App";
import { schema } from "./schema";
import { theme } from "./theme";

it("renders using initial values", () => {
  render(
    <ThemeProvider theme={theme}>
      <App schema={schema} />
    </ThemeProvider>
  );
  // General
  expect(
    screen.getByRole("heading", { level: 1, name: /general/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /case management/i })
  ).toBeChecked();
  expect(screen.getByRole("checkbox", { name: /map timeline/i })).toBeChecked();
  expect(
    screen.getByRole("checkbox", { name: /views & briefings/i })
  ).toBeChecked();
  expect(
    screen.getByRole("checkbox", { name: /notifications/i })
  ).toBeChecked();
  expect(
    screen.getByRole("checkbox", { name: /mass communications/i })
  ).toBeChecked();
  expect(
    screen.getByRole("checkbox", { name: /traffic cameras/i })
  ).toBeChecked();
  // Settings
  expect(
    screen.getByRole("heading", { level: 1, name: /settings/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("checkbox", { name: /audit log/i })).toBeChecked();
  expect(screen.getByRole("checkbox", { name: /users/i })).not.toBeChecked();
  // Child toggles should not be in the DOM
  expect(
    screen.queryByRole("checkbox", { name: /users add/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("checkbox", { name: /user delete/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("checkbox", { name: /user edit/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("checkbox", { name: /max users/i })
  ).not.toBeInTheDocument();
  // Alerts
  expect(
    screen.getByRole("heading", { level: 1, name: /alerts/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /alert manager/i })
  ).toBeChecked();
  expect(screen.getByRole("checkbox", { name: /alert rules/i })).toBeChecked();
});

it("allows a toggle to be checked", () => {
  render(
    <ThemeProvider theme={theme}>
      <App schema={schema} />
    </ThemeProvider>
  );
  userEvent.click(screen.getByRole("checkbox", { name: /case management/i }));
  expect(
    screen.getByRole("checkbox", { name: /case management/i })
  ).not.toBeChecked();
});

it("expands child toggles", () => {
  render(
    <ThemeProvider theme={theme}>
      <App schema={schema} />
    </ThemeProvider>
  );
  userEvent.click(screen.getByRole("checkbox", { name: /users/i }));
  // The child toggles should now be in the DOM
  expect(
    screen.getByRole("checkbox", { name: /users add/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /user delete/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /user edit/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /max users/i })
  ).toBeInTheDocument();
});

it("updates a toggle value", () => {
  render(
    <ThemeProvider theme={theme}>
      <App schema={schema} />
    </ThemeProvider>
  );
  userEvent.click(screen.getByRole("button", { name: /100/ }));
  userEvent.click(screen.getByRole("option", { name: /50/ }));
  expect(screen.getByRole("button", { name: /50/ })).toBeInTheDocument();
});
