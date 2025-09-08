import React from "react";
import NavBar, { findSelectedRoute } from "./index";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  describe("findSelectedRoute Function", () => {
    it("should return selected if the selected route is in the url", () => {
      const url = "/home";
      const currenUrl = "/home";

      const findFunction = findSelectedRoute(url, currenUrl);

      expect(findFunction).toBe("selected");
    });
    it("should return an empty string if the route is not in the url", () => {
      const url = "/home";
      const currentUrl = "/about";

      const findFunction = findSelectedRoute(url, currentUrl);

      expect(findFunction).toBe("");
    });
  });
  describe("styles", () => {
    it("should apply the className selected at the selected menu", () => {
      const route = "/home";
      render(
        <BrowserRouter>
          <NavBar url={route} />
        </BrowserRouter>
      );
      const homeMenu = screen.getByText(/Home/i);
      expect(homeMenu).toHaveAttribute("class", "selected");
    });
  });
});
