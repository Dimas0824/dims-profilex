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
      screen.getByText(/Saya adalah mahasiswa kelas TI-3F/i),
    ).toBeInTheDocument();
  });

  it("renders profile action links", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Website" })).toHaveAttribute(
      "href",
      "https://heydims.my.id",
    );

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/Dimas0824",
    );
  });

  it("renders about section content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Tentang" }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Profil singkat/i),
    ).toBeInTheDocument();

    expect(screen.getByText("Cloud Computing")).toBeInTheDocument();

  });
});
