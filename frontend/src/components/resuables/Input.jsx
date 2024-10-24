import React from "react";

const Input = ({
  label,
  placeholder = "Email or Username",
  className = "",
  type = "text",
  ...props
}) => {
  return (
    <label className={`form-control mt-4 w-full   ${className}`}>
      {label && (
        <div className="label">
          <span className="label-text uppercase text-zinc-600 text-xs tracking-wide small">
            {label}
          </span>
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered border-none h-14 w-auto placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide mt-1 bg-[#f4f3f4] "
        {...props}
        
      />
    </label>
  );
};

export default Input;
