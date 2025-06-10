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




// // 
// // -----------------------------------------------------------------------
// // nodeControls after textautscrolling addded resizable textarea when user writes text in ti
// import { useState, useEffect, useRef } from "react";
// import { useInputNodes } from "../../hooks/useInputNodes";

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


// export const NodeTextarea = ({ label, value, onChange, ...props }) => {
//     const textareaRef = useRef(null);

//     // State variables
//     const [showPopup, setShowPopup] = useState(false);
//     const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
//     const [currentVariableName, setCurrentVariableName] = useState('');
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     // Get input nodes - using mock data for now
//     const availableInputs = useInputNodes();

//     // Use mock data if no real inputs
//     const inputsToUse = availableInputs.length > 0 ? availableInputs : [];

//     // // Debug logs
//     // console.log("Available inputs:", availableInputs);
//     // console.log("Using inputs:", inputsToUse);
//     // console.log("Show popup:", showPopup);
//     // console.log("Popup position:", popupPosition);

//     const hasDoubleBraces = (text) => {
//         return text.includes("{{");
//     };

//     const isInsideOpenBraces = (text, cursorPosition) => {
//         const beforeCursor = text.substring(0, cursorPosition);
//         const lastOpenBrace = beforeCursor.lastIndexOf('{{');

//         if (lastOpenBrace === -1) {
//             return false;
//         }

//         const afterLastOpenBrace = beforeCursor.substring(lastOpenBrace);
//         const hasClosingBrace = afterLastOpenBrace.includes('}}');

//         return !hasClosingBrace;
//     };

//     const getCurrentVariableName = (text, cursorPosition) => {
//         const beforeCursor = text.substring(0, cursorPosition);
//         const lastOpenBrace = beforeCursor.lastIndexOf('{{');

//         if (lastOpenBrace === -1) {
//             return '';
//         }

//         const variableText = beforeCursor.substring(lastOpenBrace + 2);

//         if (variableText.includes('}}')) {
//             return '';
//         }

//         return variableText.trim();
//     };

//     const filterInputNodes = (inputNodes, filterText) => {
//         if (!filterText) {
//             return inputNodes;
//         }

//         return inputNodes.filter(node =>
//             node.name.toLowerCase().includes(filterText.toLowerCase())
//         );
//     };

//     const adjustHeight = () => {
//         const textarea = textareaRef.current;
//         if (textarea) {
//             textarea.style.height = "auto";
//             const newHeight = Math.max(textarea.scrollHeight, 60);
//             textarea.style.height = `${newHeight}px`;
//         }
//     };

//     useEffect(() => {
//         adjustHeight();
//     }, [value]);

//     const handleChange = (e) => {
//         const newVal = e.target.value;
//         const cursorPos = e.target.selectionStart;

//         onChange(e);

//         // console.log("=== HANDLE CHANGE ===");
//         // console.log("New value:", newVal);
//         // console.log("Cursor position:", cursorPos);
//         // console.log("Has double braces:", hasDoubleBraces(newVal));
//         // console.log("Is inside open braces:", isInsideOpenBraces(newVal, cursorPos));

//         if (hasDoubleBraces(newVal) && isInsideOpenBraces(newVal, cursorPos)) {
//             const currentVar = getCurrentVariableName(newVal, cursorPos);
//             const filteredInputs = filterInputNodes(inputsToUse, currentVar);

//             // console.log("Current variable:", currentVar);
//             // console.log("Filtered inputs:", filteredInputs);

//             setCurrentVariableName(currentVar);
//             setSelectedIndex(0);



//             // funciton which will add an handle and connect its node to the currentVariableINput node


//             // Always show popup when inside braces, regardless of filtered results
//             setPopupPosition({
//                 top: 50, // Fixed position for testing
//                 left: 50
//             });
//             setShowPopup(true);
//             // console.log("POPUP SHOULD BE VISIBLE NOW!");

//         } else {
//             setShowPopup(false);
//             // console.log("Hiding popup");
//         }

//         setTimeout(adjustHeight, 0);
//     };

//     const handleKeyUp = (e) => {
//         const cursorPos = e.target.selectionStart;

//         if (hasDoubleBraces(value) && isInsideOpenBraces(value, cursorPos)) {
//             const currentVar = getCurrentVariableName(value, cursorPos);

//             setCurrentVariableName(currentVar);
//             setPopupPosition({
//                 top: 50,
//                 left: 50
//             });
//             setShowPopup(true);
//         } else {
//             setShowPopup(false);
//         }
//     };

//     const selectInputNode = (selectedInput) => {
//         const textarea = textareaRef.current;
//         const cursorPos = textarea.selectionStart;
//         const beforeCursor = value.substring(0, cursorPos);
//         const afterCursor = value.substring(cursorPos);

//         const lastOpenBrace = beforeCursor.lastIndexOf('{{');

//         if (lastOpenBrace !== -1) {
//             const beforeVariable = value.substring(0, lastOpenBrace);
//             const newValue = `${beforeVariable}{{ ${selectedInput.name} }}${afterCursor}`;

//             const syntheticEvent = {
//                 target: { value: newValue }
//             };
//             onChange(syntheticEvent);
//             setShowPopup(false);
//         }
//     };

//     return (
//         <div className="relative" style={{ position: 'relative' }}>
//             <label className="block mb-1">
//                 {label}:
//                 <textarea
//                     ref={textareaRef}
//                     value={value}
//                     onChange={handleChange}
//                     onKeyUp={handleKeyUp}
//                     onBlur={() => setTimeout(() => setShowPopup(false), 200)}
//                     className="ml-1 text-xs w-full resize-none overflow-hidden"
//                     style={{ minHeight: "40px" }}
//                     {...props}
//                 />
//             </label>

//             {/* CONDITIONAL POPUP */}
//             {showPopup && (
//                 <div
//                     className="absolute bg-white border-2 border-indigo-300 rounded-md shadow-lg p-2"
//                     style={{
//                         position: 'absolute',
//                         top: `${popupPosition.top}px`,
//                         left: `${popupPosition.left}px`,
//                         zIndex: 9999,
//                         minWidth: '150px'
//                     }}
//                 >
//                     <div className="text-sm font-bold text-blue-800 mb-2">Variable Popup</div>
//                     {filterInputNodes(inputsToUse, currentVariableName).length === 0 && (
//                         <div className="text-xs text-gray-500">No inputs available</div>
//                     )}
//                     {filterInputNodes(inputsToUse, currentVariableName).map((input, index) => (
//                         <div
//                             key={input.id}
//                             className={`px-2 py-1 cursor-pointer text-sm border-b border-gray-200 last:border-b-0 ${index === selectedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'
//                                 }`}
//                             onClick={() => selectInputNode(input)}
//                         >
//                             <div className="font-medium">{input.name}</div>
//                             <div className="text-xs text-gray-500">{input.type}</div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// -----------------------------------------------------------------------
// nodeControls after textautscrolling addded resizable textarea when user writes text in ti
import { useState, useEffect, useRef } from "react";
import { useInputNodes } from "../../hooks/useInputNodes";
import { useStore } from "../../store";

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


export const NodeTextarea = ({ label, value, onChange, nodeId, ...props }) => {
    const textareaRef = useRef(null);

    // Add these lines:
    const addVariableConnection = useStore(state => state.addVariableConnection);
    const createVariableEdge = useStore(state => state.createVariableEdge);
    

    // State variables
    const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const [currentVariableName, setCurrentVariableName] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Get input nodes - using mock data for now
    const availableInputs = useInputNodes();

    // Use mock data if no real inputs
    const inputsToUse = availableInputs.length > 0 ? availableInputs : [];

    // // Debug logs
    // console.log("Available inputs:", availableInputs);
    // console.log("Using inputs:", inputsToUse);
    // console.log("Show popup:", showPopup);
    // console.log("Popup position:", popupPosition);

    const hasDoubleBraces = (text) => {
        return text.includes("{{");
    };

    const isInsideOpenBraces = (text, cursorPosition) => {
        const beforeCursor = text.substring(0, cursorPosition);
        const lastOpenBrace = beforeCursor.lastIndexOf('{{');

        if (lastOpenBrace === -1) {
            return false;
        }

        const afterLastOpenBrace = beforeCursor.substring(lastOpenBrace);
        const hasClosingBrace = afterLastOpenBrace.includes('}}');

        return !hasClosingBrace;
    };

    const getCurrentVariableName = (text, cursorPosition) => {
        const beforeCursor = text.substring(0, cursorPosition);
        const lastOpenBrace = beforeCursor.lastIndexOf('{{');

        if (lastOpenBrace === -1) {
            return '';
        }

        const variableText = beforeCursor.substring(lastOpenBrace + 2);

        if (variableText.includes('}}')) {
            return '';
        }

        return variableText.trim();
    };

    const filterInputNodes = (inputNodes, filterText) => {
        if (!filterText) {
            return inputNodes;
        }

        return inputNodes.filter(node =>
            node.name.toLowerCase().includes(filterText.toLowerCase())
        );
    };

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            const newHeight = Math.max(textarea.scrollHeight, 60);
            textarea.style.height = `${newHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [value]);

    const handleChange = (e) => {
        const newVal = e.target.value;
        const cursorPos = e.target.selectionStart;

        onChange(e);

        // console.log("=== HANDLE CHANGE ===");
        // console.log("New value:", newVal);
        // console.log("Cursor position:", cursorPos);
        // console.log("Has double braces:", hasDoubleBraces(newVal));
        // console.log("Is inside open braces:", isInsideOpenBraces(newVal, cursorPos));

        if (hasDoubleBraces(newVal) && isInsideOpenBraces(newVal, cursorPos)) {
            const currentVar = getCurrentVariableName(newVal, cursorPos);
            const filteredInputs = filterInputNodes(inputsToUse, currentVar);

            // console.log("Current variable:", currentVar);
            // console.log("Filtered inputs:", filteredInputs);

            setCurrentVariableName(currentVar);
            setSelectedIndex(0);



            // funciton which will add an handle and connect its node to the currentVariableINput node


            // Always show popup when inside braces, regardless of filtered results
            setPopupPosition({
                top: 50, // Fixed position for testing
                left: 50
            });
            setShowPopup(true);
            // console.log("POPUP SHOULD BE VISIBLE NOW!");

        } else {
            setShowPopup(false);
            // console.log("Hiding popup");
        }

        setTimeout(adjustHeight, 0);
    };

    const handleKeyUp = (e) => {
        const cursorPos = e.target.selectionStart;

        if (hasDoubleBraces(value) && isInsideOpenBraces(value, cursorPos)) {
            const currentVar = getCurrentVariableName(value, cursorPos);

            setCurrentVariableName(currentVar);
            setPopupPosition({
                top: 50,
                left: 50
            });
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    const selectInputNode = (selectedInput) => {
        const textarea = textareaRef.current;
        const cursorPos = textarea.selectionStart;
        const beforeCursor = value.substring(0, cursorPos);
        const afterCursor = value.substring(cursorPos);

        const lastOpenBrace = beforeCursor.lastIndexOf('{{');

        if (lastOpenBrace !== -1) {
            const beforeVariable = value.substring(0, lastOpenBrace);
            const newValue = `${beforeVariable}{{ ${selectedInput.name} }}${afterCursor}`;

            const syntheticEvent = {
                target: { value: newValue }
            };
            onChange(syntheticEvent);
            setShowPopup(false);

            // --- ADD HANDLE AND EDGE ---
            if (nodeId && addVariableConnection && createVariableEdge) {
                // 1. Add variable connection to node data (triggers handle in TextNode)
                addVariableConnection(nodeId, selectedInput.name, selectedInput.id);

                // 2. Create edge from input node to this text node's handle
                const targetHandleId = `${nodeId}-${selectedInput.name}-input`;
                setTimeout(() => {
                    createVariableEdge(selectedInput.id, nodeId, targetHandleId);
                }, 100);
            }

            // Set cursor position after insertion
            setTimeout(() => {
                const newCursorPos = lastOpenBrace + selectedInput.name.length + 6;
                textarea.focus();
                textarea.setSelectionRange(newCursorPos, newCursorPos);
            }, 0);
        }
    };

    return (
        <div className="relative" style={{ position: 'relative' }}>
            <label className="block mb-1">
                {label}:
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    onBlur={() => setTimeout(() => setShowPopup(false), 200)}
                    className="ml-1 text-xs w-full resize-none overflow-hidden"
                    style={{ minHeight: "40px" }}
                    {...props}
                />
            </label>

            {/* CONDITIONAL POPUP */}
            {showPopup && (
                <div
                    className="absolute bg-white border-2 border-indigo-300 rounded-md shadow-lg p-2"
                    style={{
                        position: 'absolute',
                        top: `${popupPosition.top}px`,
                        left: `${popupPosition.left}px`,
                        zIndex: 9999,
                        minWidth: '150px'
                    }}
                >
                    <div className="text-sm font-bold text-blue-800 mb-2">Variable Popup</div>
                    {filterInputNodes(inputsToUse, currentVariableName).length === 0 && (
                        <div className="text-xs text-gray-500">No inputs available</div>
                    )}
                    {filterInputNodes(inputsToUse, currentVariableName).map((input, index) => (
                        <div
                            key={input.id}
                            className={`px-2 py-1 cursor-pointer text-sm border-b border-gray-200 last:border-b-0 ${index === selectedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => selectInputNode(input)}
                        >
                            <div className="font-medium">{input.name}</div>
                            <div className="text-xs text-gray-500">{input.type}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
