const labels = {
  new: "New request",
  accepted: "Heading to restaurant",
  picked: "On the way",
  delivered: "Delivered",
};

const actions = {
  new: "Accept order",
  accepted: "Mark picked up",
  picked: "Mark delivered",
};

export default function OrderCard({ order, canAccept, onAdvance, onDecline }) {
  const action = actions[order.status];
  const blocked = order.status === "new" && !canAccept;

  return (
    <li className="order">
      <div className="order-head">
        <div>
          <h3>{order.restaurant}</h3>
          <p>Deliver to {order.area}</p>
        </div>
        <span className={"badge " + order.status}>{labels[order.status]}</span>
      </div>

      <dl className="order-facts">
        <div>
          <dt>Items</dt>
          <dd>{order.items}</dd>
        </div>
        <div>
          <dt>Distance</dt>
          <dd>{order.distance} km</dd>
        </div>
        <div>
          <dt>Payout</dt>
          <dd>₹{order.payout + order.tip}</dd>
        </div>
        <div>
          <dt>Placed</dt>
          <dd>{order.time}</dd>
        </div>
      </dl>

      {action && (
        <div className="order-actions">
          {order.status === "new" && (
            <button className="ghost" onClick={() => onDecline(order.id)}>
              Decline
            </button>
          )}
          <button className="primary" disabled={blocked} onClick={() => onAdvance(order.id)}>
            {action}
          </button>
        </div>
      )}
    </li>
  );
}
