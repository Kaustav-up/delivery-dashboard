export default function Header({ partner, online, onToggle }) {
  const initials = partner.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="header">
      <div className="header-inner">
        <div className="who">
          <div className="avatar">{initials}</div>
          <div>
            <h1>{partner.name}</h1>
            <p>{partner.vehicle}</p>
          </div>
        </div>
        <button
          className={online ? "toggle on" : "toggle"}
          onClick={onToggle}
          aria-pressed={online}
        >
          <span className="dot" />
          {online ? "You're online" : "You're offline"}
        </button>
      </div>
    </header>
  );
}
