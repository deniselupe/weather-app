import { render, screen, waitFor } from "@testing-library/react";
import { configure } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import Header from "@/components/header";

configure({ testIdAttribute: "id" });

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
        
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    test("handles input change", async () => {
        const user = userEvent.setup();

        render(<Header />);

        await user.type(screen.getByRole("textbox"), "Houston");

        await waitFor(() => {
            expect(screen.getByRole("textbox")).toHaveValue("Houston");
        });
    });

    test("displays auto suggest container on input focus", async () => {
        const user = userEvent.setup();

        render(<Header />);

        expect(screen.queryByTestId("auto-suggest")).toBeNull();

        await user.pointer({keys: "[MouseLeft]", target: screen.getByRole("textbox")});

        await waitFor(() => {
            expect(screen.getByTestId("auto-suggest")).toBeInTheDocument();
        });
    });

    test("hides auto suggest container on input blur", async () => {
        const user = userEvent.setup();

        render(<Header />);

        expect(screen.queryByTestId("auto-suggest")).toBeNull();

        await user.pointer({keys: "[MouseLeft]", target: screen.getByRole("textbox")});

        await waitFor(() => {
            expect(screen.queryByTestId("auto-suggest")).not.toBeNull();
        });

        await user.pointer({keys: "[MouseLeft]", target: document.body});

        await waitFor(() => {
            expect(screen.queryByTestId("auto-suggest")).toBeNull();
        });
    });

    test("renders auto suggest dropdown options", async () => {
        const user = userEvent.setup();

        render(<Header />);

        await user.type(screen.getByRole("textbox"), "Houston");

        await waitFor(() => {
            expect(screen.queryAllByTestId("auto-suggest-item")).toHaveLength(2);
        });
    });

    test("hides auto suggest items on zero results", async () => {
        const user = userEvent.setup();

        render(<Header />);

        const input = screen.getByRole("textbox");

        await user.type(input, "Houston");

        await waitFor(() => {
            expect(screen.queryAllByTestId("auto-suggest-item")).toHaveLength(2);
        });

        await user.clear(input);

        await waitFor(() => {
            expect(screen.queryAllByTestId("auto-suggest-item")).toHaveLength(0);
        });
    });
});
