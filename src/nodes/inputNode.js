// // inputNode.js

// import { useState } from "react";
// import { Handle, Position } from "reactflow";

// export const InputNode = ({ id, data }) => {
//     const [currName, setCurrName] = useState(
//         data?.inputName || id.replace("customInput-", "input_")
//     );
//     const [inputType, setInputType] = useState(data.inputType || "Text");

//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleTypeChange = (e) => {
//         setInputType(e.target.value);
//     };

//     return (
//         <div className="w-[200px] h-[80px] border border-black p-2 bg-white rounded-lg shadow-md">
//             <div>
//                 <span>Input</span>
//             </div>
//             <div>
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         value={currName}
//                         onChange={handleNameChange}
//                     />
//                 </label>
//                 <label>
//                     Type:
//                     <select value={inputType} onChange={handleTypeChange}>
//                         <option value="Text">Text</option>
//                         <option value="File">File</option>
//                     </select>
//                 </label>
//             </div>
//             <Handle
//                 type="source"
//                 position={Position.Right}
//                 id={`${id}-value`}
//             />
//         </div>
//     );
// };

// //
// //
// // 2nd // inputNode.js
// import { useState } from "react";
// import { Position } from "reactflow";
// import { createNode, HANDLE_CONFIGS } from "./templateNode/nodeFactory";
// import { NodeInput, NodeSelect } from "./templateNode/nodeControls";

// const InputNodeContent = ({ id, data }) => {
//     // Handle naming exactly like the original
//     const [currName, setCurrName] = useState(
//         data?.inputName || id.replace("customInput-", "input_")
//     );
//     const [inputType, setInputType] = useState(data.inputType || "Text");

//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleTypeChange = (e) => {
//         setInputType(e.target.value);
//     };

//     return (
//         <>
//             <NodeInput
//                 label="Name"
//                 value={currName}
//                 onChange={handleNameChange}
//             />
//             <NodeSelect
//                 label="Type"
//                 value={inputType}
//                 onChange={handleTypeChange}
//                 options={[
//                     { value: "Text", label: "Text" },
//                     { value: "File", label: "File" },
//                 ]}
//             />
//         </>
//     );
// };

// export const InputNode = createNode({
//     title: "Input",
//     renderContent: InputNodeContent,
//     handles: [
//         {
//             type: "source",
//             position: Position.Right,
//             id: (id) => `${id}-value`,
//         },
//     ],
//     dimensions: { width: "200px", height: "80px" },
// });

////

// 3rd try
import { useState } from "react";
import { Position } from "reactflow";
import { createNode, HANDLE_CONFIGS } from "./templateNode/nodeFactory";
import { NodeInput, NodeSelect } from "./templateNode/nodeControls";
import { useNodeState } from "../hooks/useNodeState";

const InputNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: inputType,
        handleNameChange,
        handleVariantChange: handleTypeChange,
    } = useNodeState(id, data, "input");

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Type"
                value={inputType}
                onChange={handleTypeChange}
                options={[
                    { value: "Text", label: "Text" },
                    { value: "File", label: "File" },
                ]}
            />
        </>
    );
};

export const InputNode = createNode({
    title: "Input",
    renderContent: InputNodeContent,
    handles: [
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-value`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
