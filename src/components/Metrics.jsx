import { metrics } from "../data.js";

export default function Metrics() {
  return (
    <section className="card">
      <h2>Performance</h2>
      <ul className="metrics">
        {metrics.map((m) => (
          <li key={m.label}>
            <span>{m.label}</span>
            <strong>
              {m.value}
              {m.suffix}
            </strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
