import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface DropdownProps {
  options: string[];
  title: string;
  isOpen?: boolean;
  onToggle: () => void;
  onOptionSelected: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  title,
  isOpen,
  onToggle,
  onOptionSelected,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    if (onOptionSelected) onOptionSelected(value);
    onToggle();
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onToggle();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onToggle]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={styles.dropdownHeader}
        type="button"
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div>{selectedOption || title}</div>
        <div>
          {isOpen ? (
            <IoMdArrowDropup
              className={`${styles.dropdownIcon} ${isOpen && styles.open}`}
            />
          ) : (
            <IoMdArrowDropdown
              className={`${styles.dropdownIcon} ${isOpen && styles.open}`}
            />
          )}
        </div>
      </button>

      {isOpen && (
        <ul className={styles.dropdownListContainer}>
          {options.map((option, index) => (
            <li
              className={styles.dropdownListItem}
              onClick={() => onOptionClicked(option)}
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
