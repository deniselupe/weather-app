import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/header";

const mockFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => {
    switch (input) {
        case "/weather/api/geo?loc=Houston":
            return Promise.resolve({
                ok: true,
                status: 200,
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
            })
        case "/weather/api/geo?loc=test":
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve([])
            })
    }
};

describe("Header", () => {
    beforeAll(() => {
        global.fetch = jest.fn(mockFetch) as jest.Mock;
    });

    afterEach(() => jest.clearAllMocks());

    test("renders input field", () => {
        render(<Header />);
    
        const input = screen.getByRole("textbox");
        
        expect(input).toBeInTheDocument();
    });

    test("handles input change", async () => {
        const user = userEvent.setup();

        render(<Header />);

        const input = screen.getByRole("textbox");

        await user.type(input, "Houston");

        await waitFor(() => {
            expect(input).toHaveValue("Houston");
        });
    });
});
