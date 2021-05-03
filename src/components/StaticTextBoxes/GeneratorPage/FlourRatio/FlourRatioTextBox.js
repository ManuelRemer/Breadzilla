import "./FlourRatioTextBox.css";
export default function FlourRatioTextBox({ scrollRef }) {
  return (
    <div className="flour-ratio-textbox" ref={scrollRef}>
      <p>Fill up to</p>
      <span className="flour-ratio-textbox-highlight">100%</span>
    </div>
  );
}
