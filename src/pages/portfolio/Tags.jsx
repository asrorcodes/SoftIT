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
            "px-4 py-2 border rounded-md cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50",
            activeTag === item
              ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
              : "border-gray-500 text-gray-400 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-400"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default memo(Tags);