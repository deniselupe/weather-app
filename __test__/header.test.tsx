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
        const { getByRole } = render(<Header />);
        
        expect(getByRole("textbox")).toBeInTheDocument();
    });

    test("handles input change", async () => {
        const user = userEvent.setup();

        const { getByRole } = render(<Header />);

        await user.type(getByRole("textbox"), "Houston");

        await waitFor(() => {
            expect(getByRole("textbox")).toHaveValue("Houston");
        });
    });

    test("displays auto suggest container on input focus", async () => {
        const user = userEvent.setup();

        const { queryByTestId, getByRole } = render(<Header />);

        expect(queryByTestId("auto-suggest")).toBeNull();

        await user.pointer({keys: "[MouseLeft]", target: getByRole("textbox")});

        await waitFor(() => {
            expect(queryByTestId("auto-suggest")).not.toBeNull();
        });
    });

    test("hides auto suggest container on input blur", async () => {
        const user = userEvent.setup();

        const { queryByTestId, getByRole } = render(<Header />);

        expect(queryByTestId("auto-suggest")).toBeNull();

        await user.pointer({keys: "[MouseLeft]", target: getByRole("textbox")});

        await waitFor(() => {
            expect(queryByTestId("auto-suggest")).not.toBeNull();
        });

        await user.pointer({keys: "[MouseLeft]", target: document.body});

        await waitFor(() => {
            expect(queryByTestId("auto-suggest")).toBeNull();
        });
    });

    test("renders auto suggest dropdown options", async () => {
        const user = userEvent.setup();

        const { getByRole, queryAllByTestId } = render(<Header />);

        await user.type(getByRole("textbox"), "Houston");

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(2);
        });
    });

    test("hides auto suggest items on zero results", async () => {
        const user = userEvent.setup();

        const { getByRole, queryAllByTestId } = render(<Header />);

        const input = getByRole("textbox");

        await user.type(input, "Houston");

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(2);
        });

        await user.clear(input);

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(0);
        });
    });

    test('navigates down auto suggest items when pressing ArrowDown key and update input value', async () => {
        const user = userEvent.setup();

        const { getByRole, queryAllByTestId } = render(<Header />);

        const input = getByRole("textbox");

        await user.type(input, "Houston");

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(2);
            expect(input).toHaveValue("Houston");
        });

        await user.keyboard("[ArrowDown]");

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(2);
            expect(input).toHaveValue("Houston, Missouri, US");
        });
    });

    test('navigates up auto suggest items when pressing ArrowUp key and update input value', async () => {
        const user = userEvent.setup();

        const { getByRole, queryAllByTestId } = render(<Header />);

        const input = getByRole("textbox");

        await user.type(input, "Houston");

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(2);
            expect(input).toHaveValue("Houston");
        });

        await user.keyboard("[ArrowUp]");

        await waitFor(() => {
            expect(queryAllByTestId("auto-suggest-item")).toHaveLength(2);
            expect(input).toHaveValue("Houston, Alaska, US");
        });
    });

    test("hides input error on initial render", () => {
        const { queryByText } = render(<Header />);

        expect(queryByText("Not found. To make search precise, input the name of a city.")).toBeNull();
    });

    test("displays input error when submitting empty search value", async () => {
        const user = userEvent.setup();

        const { getByRole, getByText } = render(<Header />);

        await user.type(getByRole("textbox"), "   ");
        await user.keyboard("[Enter]");

        await waitFor(() => {
            expect(getByText("Not found. To make search precise, input the name of a city.")).toBeInTheDocument();
        });
    });

    test("displays input error when no auto suggest item is selected for search", async () => {
        const user = userEvent.setup();

        const { getByRole, getByText } = render(<Header />);

        await user.type(getByRole("textbox"), "Houston");
        await user.keyboard("[Enter]");

        await waitFor(() => {
            expect(getByText("Not found. To make search precise, input the name of a city.")).toBeInTheDocument();
        });
    });
});
