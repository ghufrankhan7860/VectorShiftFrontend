// // Node contorls for a template node in a React application

// export const NodeInput = ({
//     label,
//     value,
//     onChange,
//     type = "text",
//     ...props
// }) => (
//     <label className="block mb-1">
//         {label}:
//         <input
//             type={type}
//             value={value}
//             onChange={onChange}
//             className="ml-1 text-xs"
//             {...props}
//         />
//     </label>
// );

// export const NodeSelect = ({ label, value, onChange, options, ...props }) => (
//     <label className="block mb-1">
//         {label}:
//         <select
//             value={value}
//             onChange={onChange}
//             className="ml-1 text-xs"
//             {...props}
//         >
//             {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                     {option.label}
//                 </option>
//             ))}
//         </select>
//     </label>
// );

// export const NodeTextarea = ({ label, value, onChange, ...props }) => (
//     <label className="block mb-1">
//         {label}:
//         <textarea
//             value={value}
//             onChange={onChange}
//             className="ml-1 text-xs w-full"
//             {...props}
//         />
//     </label>
// );

// //-----------------------------------------------------------------------------
// //
// // update nodecontrols after output, LLM and textnode change from original condition
// import React from "react";

// export const NodeInput = ({
//     label,
//     value,
//     onChange,
//     type = "text",
//     ...props
// }) => (
//     <label className="block mb-1">
//         {label}:
//         <input
//             type={type}
//             value={value}
//             onChange={onChange}
//             className="ml-1 text-xs w-full"
//             {...props}
//         />
//     </label>
// );

// export const NodeSelect = ({ label, value, onChange, options, ...props }) => (
//     <label className="block mb-1">
//         {label}:
//         <select
//             value={value}
//             onChange={onChange}
//             className="ml-1 text-xs w-full"
//             {...props}
//         >
//             {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                     {option.label}
//                 </option>
//             ))}
//         </select>
//     </label>
// );

// export const NodeTextarea = ({ label, value, onChange, ...props }) => (
//     <label className="block mb-1">
//         {label}:
//         <textarea
//             value={value}
//             onChange={onChange}
//             className="ml-1 text-xs w-full resize-none"
//             {...props}
//         />
//     </label>
// );

// -----------------------------------------------------------------------
// nodeControls after textautscrolling addded resizable textarea when user writes text in ti
import React, { useEffect, useRef } from "react";

export const NodeInput = ({
    label,
    value,
    onChange,
    type = "text",
    ...props
}) => (
    <label className="block mb-1">
        {label}:
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="ml-1 text-xs w-full"
            {...props}
        />
    </label>
);

export const NodeSelect = ({ label, value, onChange, options, ...props }) => (
    <label className="block mb-1">
        {label}:
        <select
            value={value}
            onChange={onChange}
            className="ml-1 text-xs w-full"
            {...props}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </label>
);

export const NodeTextarea = ({ label, value, onChange, ...props }) => {
    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            // Reset height to auto to get the correct scrollHeight
            textarea.style.height = "auto";

            // Set height based on scroll height with some padding
            const newHeight = Math.max(textarea.scrollHeight, 40); // Minimum 40px height
            textarea.style.height = `${newHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [value]);

    const handleChange = (e) => {
        onChange(e);
        // Small delay to ensure the value is updated before adjusting height
        setTimeout(adjustHeight, 0);
    };

    return (
        <label className="block mb-1">
            {label}:
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                className="ml-1 text-xs w-full resize-none overflow-hidden"
                style={{ minHeight: "40px" }}
                {...props}
            />
        </label>
    );
};
