import classNames from "classnames";
import { memo } from "react";

const Tags = ({ items, onClickTag, activeTag }) => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center mb-10">
      {items.map((item, index) => (
        <li
          key={index}
          role="button"
          aria-label={item}
          onClick={() => onClickTag(item)}
          className={classNames(
            "px-4 py-2 border rounded-md cursor-pointer transition",
            activeTag === item
              ? "bg-[#D13291] text-white "
              : "border-gray-400 text-gray-400 hover:bg-[#922265] hover:text-white"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default memo(Tags);
