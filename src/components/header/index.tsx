export default function Header() {
    return (
        <header className="text-white font-light my-6">
            <div className="w-5/6 md:w-3/4 mx-auto text-black relative">
                <div id="search-bar" className="md:w-[400px] ml-auto flex gap-2 justify-end items-center bg-white rounded-t">
                    <input
                        type="text"
                        placeholder="City, State, Zip Code"
                        className="flex-1 px-4 py-2 border outline-none rounded"
                    />
                </div>
                <div id="results-dropdown" className="w-full md:w-[400px] fixed absolute right-0 bg-white rounded-b">
                    <div id="dropdown-item" className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">City, State, Country</div>
                    <div id="dropdown-item" className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">City, State, Country</div>
                    <div id="dropdown-item" className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">City, State, Country</div>
                    <div id="dropdown-item" className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">City, State, Country</div>
                </div>
            </div>
        </header>
    );
}