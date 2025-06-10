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

//
// update nodecontrols after output, LLM and textnode change from original condition
import React from "react";

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

export const NodeTextarea = ({ label, value, onChange, ...props }) => (
    <label className="block mb-1">
        {label}:
        <textarea
            value={value}
            onChange={onChange}
            className="ml-1 text-xs w-full resize-none"
            {...props}
        />
    </label>
);
