// // outputNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const OutputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
//   const [outputType, setOutputType] = useState(data.outputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setOutputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-value`}
//       />
//       <div>
//         <span>Output</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={currName}
//             onChange={handleNameChange}
//           />
//         </label>
//         <label>
//           Type:
//           <select value={outputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">Image</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// }

//
//
// 2nd
import { useState } from "react";
import { Position } from "reactflow";
import { createNode, HANDLE_CONFIGS } from "./templateNode/nodeFactory";
import { NodeInput, NodeSelect } from "./templateNode/nodeControls";
import { useNodeState } from "../hooks/useNodeState";

const OutputNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: outputType,
        handleNameChange,
        handleVariantChange: handleTypeChange,
    } = useNodeState(id, data, "output");

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Type"
                value={outputType}
                onChange={handleTypeChange}
                options={[
                    { value: "Text", label: "Text" },
                    { value: "Image", label: "Image" },
                ]}
            />
        </>
    );
};

export const OutputNode = createNode({
    title: "Output",
    renderContent: OutputNodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-value`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
