export default function Header() {
    return (
        <header className="text-black my-6 border border-black">
            <div className="w-5/6 md:w-3/4 mx-auto flex justify-between items-center">
                <div className="w-40 min-w-40 text-2xl">Weather</div>
                <div className="flex-1 ml-5">
                    <div className="flex gap-2 justify-end items-center">
                        <input type="text" placeholder="City, State, Zip Code" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </header>
    );
}