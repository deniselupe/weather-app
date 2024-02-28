import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/header";

describe("Header", () => {
    beforeAll(() => {
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json: () => Promise.resolve([
                    {
                        "name": "Houston",
                        "lat": 37.3261588,
                        "lon": -91.955988,
                        "country": "US",
                        "state": "Missouri"
                    },
                    {
                        "name": "Houston",
                        "lat": 61.6302778,
                        "lon": -149.818055,
                        "country": "US",
                        "state": "Alaska"
                    }
                ])
            });
        }) as jest.Mock;
    });

    afterEach(() => jest.clearAllMocks());

    test("renders input field", () => {
        render(<Header />);
    
        const input = screen.getByPlaceholderText("Search city...");
        
        expect(input).toBeInTheDocument();
    });
    
    test("calls fetch when input value is changed", async () => {
        const user = userEvent.setup();
    
        render(<Header />);
    
        const input = screen.getByPlaceholderText("Search city...");
    
        await user.type(input, "New York");
    
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
        });
    });
});