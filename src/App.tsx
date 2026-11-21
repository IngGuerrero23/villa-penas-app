import { useFetch } from "./hooks/useFetch";
import { getPaquetes } from "./services/paquetesService";
import AsyncState from "./components/AsyncState";

export default function App() {
    const { data, loading, error } = useFetch(getPaquetes);
    return (
        <main>
            <h1>Villa Peñas</h1>
            <AsyncState loading={loading} error={error} isEmpty={!data || data.length === 0}>
                <ul>{data?.map((p) => <li key={p.id}>{p.nombre} — ₡{p.precioColones}</li>)}</ul>
            </AsyncState>
        </main>
    );
}