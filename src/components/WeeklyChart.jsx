import { weekly } from "../data.js";

export default function WeeklyChart({ today }) {
  const days = [...weekly, { day: "Today", amount: today }];
  const max = Math.max(...days.map((d) => d.amount));
  const total = days.reduce((sum, d) => sum + d.amount, 0);

  return (
    <section className="card">
      <div className="card-top">
        <h2>This week</h2>
        <span className="total">₹{total.toLocaleString("en-IN")}</span>
      </div>
      <div className="bars">
        {days.map((d) => (
          <div className="bar-col" key={d.day}>
            <div className="bar-track">
              <div
                className={d.day === "Today" ? "bar today" : "bar"}
                style={{ height: Math.max((d.amount / max) * 100, 4) + "%" }}
                title={"₹" + d.amount}
              />
            </div>
            <span>{d.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
