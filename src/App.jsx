import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HamMenu from "./components/HamMenu";
import { useState } from "react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header setIsMenuOpen={setIsMenuOpen} />
            <Outlet/>
            <Footer />

            {/* hamburger menu */}
            {isMenuOpen && (
                <HamMenu onClose={() => setIsMenuOpen(false)} />
            )}
        </>
    );
}
