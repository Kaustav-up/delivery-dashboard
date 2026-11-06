const rupees = (n) => "₹" + n.toLocaleString("en-IN");

export default function Summary({ stats }) {
  return (
    <section className="summary">
      <div className="earnings">
        <span>Today's earnings</span>
        <strong>{rupees(stats.earnings)}</strong>
        <small>{stats.deliveredCount} orders delivered</small>
      </div>
      <div className="mini">
        <span>In progress</span>
        <strong>{stats.activeCount}</strong>
      </div>
      <div className="mini">
        <span>Distance covered</span>
        <strong>{stats.distance.toFixed(1)} km</strong>
      </div>
    </section>
  );
}
