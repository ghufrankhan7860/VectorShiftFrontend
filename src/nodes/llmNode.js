// // llmNode.js

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }

// 2nd LLMNODe
import { useState } from "react";
import { Position } from "reactflow";
import { createNode, HANDLE_CONFIGS } from "./templateNode/nodeFactory";
import { NodeInput, NodeSelect } from "./templateNode/nodeControls";
import { useNodeState } from "../hooks/useNodeState";

const LLMNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: llmType,
        handleNameChange,
        handleVariantChange: handleTypeChange,
    } = useNodeState(id, data, "llm");

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Type"
                value={llmType}
                onChange={handleTypeChange}
                options={[
                    { value: "OpenAI", label: "OpenAI" },
                    { value: "Anthropic", label: "Anthropic" },
                ]}
            />
        </>
    );
};

export const LLMNode = createNode({
    title: "LLM",
    renderContent: LLMNodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-system`,
            style: { top: `${100 / 3}%` }, // First handle at ~33%
        },
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-prompt`,
            style: { top: `${200 / 3}%` }, // Second handle at ~67%
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-response`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
