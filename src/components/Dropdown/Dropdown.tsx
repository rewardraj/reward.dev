import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface DropdownProps {
  options: string[];
  title: string;
  isOpen?: boolean;
  onToggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  title,
  isOpen,
  onToggle,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    onToggle();
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={onToggle}>
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
      </div>

      {isOpen && (
        <div className={styles.dropdownListContainer}>
          <div className={styles.dropdownList}>
            {options.map((option, index) => (
              <p
                className={styles.dropdownListItem}
                onClick={() => onOptionClicked(option)}
                key={index}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
