import { sandTimerSVG } from "../../../svgs/svgs";

export default function PostedDate() {
  return (
    <div className="posted_date">
      <span className="sand_timer_icon"> {sandTimerSVG}</span>
      <span>Posted 10 days ago.</span>
    </div>
  );
}
