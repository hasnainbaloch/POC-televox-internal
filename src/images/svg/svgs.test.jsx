import React from "react";
import { render } from "@testing-library/react";
import * as SVGS from "./extendedSvgs";
import * as SVGS2 from "./index";
import { getValueByKey } from "../../utils/helpers";
describe("SVGs", () => {
  it("should render all SVGs", () => {
    Object.keys(SVGS).forEach((key) => {
      const Svg = getValueByKey(SVGS, key);
      const { container } = render(<Svg />);
      expect(container).toBeInTheDocument();
    });
    Object.keys(SVGS2).forEach((key) => {
      const Svg = getValueByKey(SVGS2, key);
      if (typeof Svg === "object") return;
      const { container } = render(<Svg />);
      expect(container).toBeInTheDocument();
    });
  });
});
