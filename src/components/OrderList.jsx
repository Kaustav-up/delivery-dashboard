import { useState } from "react";
import OrderCard from "./OrderCard.jsx";

const tabs = [
  { key: "active", label: "Current" },
  { key: "delivered", label: "Delivered" },
];

export default function OrderList({ orders, online, onAdvance, onDecline }) {
  const [tab, setTab] = useState("active");

  const visible = orders.filter((o) =>
    tab === "delivered" ? o.status === "delivered" : o.status !== "delivered"
  );

  return (
    <section className="orders">
      <div className="orders-top">
        <h2>Orders</h2>
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={tab === t.key ? "tab current" : "tab"}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {!online && tab === "active" && (
        <p className="notice">Go online to accept new orders.</p>
      )}

      {visible.length === 0 ? (
        <p className="empty">
          {tab === "active"
            ? "No orders right now. New requests will show up here."
            : "You haven't delivered anything yet today."}
        </p>
      ) : (
        <ul className="order-list">
          {visible.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              canAccept={online}
              onAdvance={onAdvance}
              onDecline={onDecline}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
