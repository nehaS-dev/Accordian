import { useState } from "react";
import "../styles.css";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="accordian">
      {items.map((item, index) => (
        <div
          className="accordian-item"
          key={index}
          onClick={() => handleToggle(index)}
        >
          <button className="accordian-title">
            {item.title}
            {activeIndex === index ? "▲" : "▼"}
          </button>
          {activeIndex === index && (
            <div className="accordian-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordian;
