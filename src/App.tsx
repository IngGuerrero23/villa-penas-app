import { useState } from "react";
import PackagesView from "./components/PackagesView";
import ExtrasView from "./components/ExtrasView";
import InstagramView from "./components/InstagramView";

type Tab = "paquetes" | "extras" | "instagram";

const TABS: { id: Tab; label: string }[] = [
    { id: "paquetes", label: "Paquetes" },
    { id: "extras", label: "Extras" },
    { id: "instagram", label: "Instagram" },
];

export default function App() {
    const [tab, setTab] = useState<Tab>("paquetes");

    return (
        <div className="app">
            <header>
                <h1>Villa Peñas</h1>
                <nav className="tabs">
                    {TABS.map((t) => (
                        <button
                            key={t.id}
                            className={t.id === tab ? "active" : ""}
                            onClick={() => setTab(t.id)}
                        >
                            {t.label}
                        </button>
                    ))}
                </nav>
            </header>
            <main>
                {tab === "paquetes" && <PackagesView />}
                {tab === "extras" && <ExtrasView />}
                {tab === "instagram" && <InstagramView />}
            </main>
        </div>
    );
}