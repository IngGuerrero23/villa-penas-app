import { useFetch } from "../hooks/useFetch";
import { getInstagram } from "../services/instagramService";
import AsyncState from "./AsyncState";

export default function InstagramView() {
    const { data, loading, error } = useFetch(getInstagram);

    return (
        <AsyncState loading={loading} error={error} isEmpty={!data || data.length === 0}>
            <div className="grid">
                {data?.map((post, i) => (
                    <article className="card" key={i}>
                        <pre>{JSON.stringify(post, null, 2)}</pre>
                    </article>
                ))}
            </div>
        </AsyncState>
    );
}