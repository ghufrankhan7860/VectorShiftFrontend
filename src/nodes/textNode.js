// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text"
//             value={currText}
//             onChange={handleTextChange}
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }

// // 2nd
// import { useState } from "react";
// import { createNode, HANDLE_CONFIGS } from "./templateNode/nodeFactory";
// import { NodeInput, NodeTextarea } from "./templateNode/nodeControls";
// import { useNodeState } from "../hooks/useNodeState";

// import { Position } from "reactflow";

// const TextNodeContent = ({ id, data }) => {
//     const { currName, textContent, handleNameChange, handleTextChange } =
//         useNodeState(id, data, "text");

//     return (
//         <>
//             <NodeInput
//                 label="Name"
//                 value={currName}
//                 onChange={handleNameChange}
//             />
//             {/* <NodeTextarea
//                 label="Text"
//                 value={textContent}
//                 onChange={handleTextChange}
//                 rows={3}
//                 placeholder="Enter your text here..."
//             /> */}

//             <NodeTextarea
//                 label="Text"
//                 value={textContent}
//                 onChange={handleTextChange}
//                 nodeId={id} // <-- Pass nodeId here!

//             />
//         </>
//     );
// };

// export const TextNode = createNode({
//     title: "Text",
//     renderContent: TextNodeContent,
//     handles: [
//         {
//             type: "source",
//             position: Position.Right,
//             id: (id) => `${id}-output`,
//         },
//     ],
//     dimensions: { width: "200px", height: "auto" },
// });



// 3rd
import { Position, Handle } from "reactflow";
import { createNode } from "./templateNode/nodeFactory";
import { NodeInput, NodeTextarea } from "./templateNode/nodeControls";
import { useNodeState } from "../hooks/useNodeState";

const TextNodeContent = ({ id, data }) => {
    const { currName, textContent, handleNameChange, handleTextChange } =
        useNodeState(id, data, "text");

    // Get variable connections from node data (added by addVariableConnection)
    const variableConnections = data?.variableConnections || [];

    return (
        <>
            {/* Dynamic input handles for each variable connection */}
            {variableConnections.map((conn, idx) => (
                <Handle
                    key={conn.handleId}
                    type="target"
                    position={Position.Left}
                    id={conn.handleId}
                    style={{
                        top: 40 + idx * 24,
                        background: "#3b82f6",
                        width: 10,
                        height: 10,
                    }}
                />
            ))}

            {/* Output handle */}
            <Handle
                type="source"
                position={Position.Right}
                id={`${id}-output`}
                style={{
                    background: "#10b981",
                    width: 10,
                    height: 10,
                }}
            />

            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />

            <NodeTextarea
                label="Text"
                value={textContent}
                onChange={handleTextChange}
                nodeId={id} // Pass nodeId so handles/edges work!
                rows={3}
                placeholder="Enter your text here..."
            />
        </>
    );
};

export const TextNode = createNode({
    title: "Text",
    renderContent: TextNodeContent,
    handles: [
        // Output handle is rendered above, but you can keep this for compatibility
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-output`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});