import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Summary from "./components/Summary.jsx";
import OrderList from "./components/OrderList.jsx";
import WeeklyChart from "./components/WeeklyChart.jsx";
import Metrics from "./components/Metrics.jsx";
import { initialOrders, partner } from "./data.js";
``
const nextStatus = {
  new: "accepted",
  accepted: "picked",
  picked: "delivered",
};

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [online, setOnline] = useState(true);

  const stats = useMemo(() => {
    const delivered = orders.filter((o) => o.status === "delivered");
    return {
      earnings: delivered.reduce((sum, o) => sum + o.payout + o.tip, 0),
      deliveredCount: delivered.length,
      activeCount: orders.filter((o) => o.status !== "delivered").length,
      distance: delivered.reduce((sum, o) => sum + o.distance, 0),
    };
  }, [orders]);

  const advance = (id) => {
    setOrders((list) =>
      list.map((o) => (o.id === id ? { ...o, status: nextStatus[o.status] } : o))
    );
  };

  const decline = (id) => {
    setOrders((list) => list.filter((o) => o.id !== id));
  };

  return (
    <div className="app">
      <Header partner={partner} online={online} onToggle={() => setOnline(!online)} />
      <main className="layout">
        <Summary stats={stats} />
        <div className="columns">
          <OrderList orders={orders} online={online} onAdvance={advance} onDecline={decline} />
          <aside className="side">
            <WeeklyChart today={stats.earnings} />
            <Metrics />
          </aside>
        </div>
      </main>
    </div>
  );
}
