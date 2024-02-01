import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "@/components/header";

describe("Header", () => {
    test("renders input field", () => {
        render(<Header />);

        const input = screen.getByPlaceholderText("Search city...");
        expect(input).toBeInTheDocument();
    });

    test("handles input change", () => {
        render(<Header />);

        const input = screen.getByPlaceholderText("Search city...") as HTMLInputElement;

        fireEvent.change(input, {
            target: {
                value: "New York"
            }
        });

        expect(input.value).toBe("New York");
    });
});
