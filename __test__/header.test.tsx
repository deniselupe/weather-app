import { render, screen } from "@testing-library/react";
import Header from "@/components/header";

describe("Header", () => {
    test("renders input field", () => {
        render(<Header />);

        const input = screen.getByPlaceholderText("Search city...");
        expect(input).toBeInTheDocument();
    });
});