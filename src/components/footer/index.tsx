import Link from "next/link";

export default function Footer() {
    return(
        <footer className="sm:w-3/4 py-2 mx-auto text-white font-light drop-shadow-xl">
            ©2024 {" "}
            <Link href="https://github.com/deniselupe/weather-app">Denise Rodriguez</Link>
        </footer>
    );
}