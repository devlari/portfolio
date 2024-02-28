export type ItemProps = {
  name: string;
  percent: number;
};

export function DropdownItem(item: ItemProps) {
  return (
    <li
      style={{
        width: "95%",
        padding: "10px",
      }}
    >
      <div className="d-flex justify-content-between">
        <span className="fw-bold mb-2">{item.name}</span>
        <span>{item.percent}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-pink"
          role="progressbar"
          style={{ width: `${item.percent}%` }}
          aria-valuenow={item.percent}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </li>
  );
}
