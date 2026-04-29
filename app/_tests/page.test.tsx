import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../page";

describe("Landing page", () => {
  it("renders main hero heading and summary", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Muhammad Irsyad Dimas Abdillah",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Personal website untuk memperkenalkan profil/i),
    ).toBeInTheDocument();
  });

  it("renders profile action links", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Visit Website" })).toHaveAttribute(
      "href",
      "https://heydims.my.id",
    );

    expect(screen.getByRole("link", { name: "GitHub Profile" })).toHaveAttribute(
      "href",
      "https://github.com/Dimas0824",
    );
  });
});
