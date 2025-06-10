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

// 2nd
import { useState } from "react";
import { Position } from "reactflow";
import { createNode, HANDLE_CONFIGS } from "./templateNode/nodeFactory";
import { NodeInput, NodeTextarea } from "./templateNode/nodeControls";
import { useNodeState } from "../hooks/useNodeState";

const TextNodeContent = ({ id, data }) => {
    const { currName, textContent, handleNameChange, handleTextChange } =
        useNodeState(id, data, "text");

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeTextarea
                label="Text"
                value={textContent}
                onChange={handleTextChange}
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
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-output`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
