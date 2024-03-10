import React, { useRef, useState } from "react";

interface InputType {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  icon?: React.ReactNode;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  id?: string | undefined;
}

const Input = ({ type, placeholder, icon, value, onChange, id }: InputType) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={`${
        isFocus && " ring-2"
      } ring-tradewind-100 dark:ring-tradewind-300 dark:border-tradewind-300 border-tradewind-100 my-2 mb-3 flex items-center rounded-md border text-lg ring-1 hover:ring-2 `}
    >
      {icon && (
        <span onClick={focusInput} className=" px-3 pr-4">
          {icon}
        </span>
      )}
      <input
        id={id}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={onChange}
        className=" w-full py-2  focus:outline-none "
      />
    </div>
  );
};

export default Input;
