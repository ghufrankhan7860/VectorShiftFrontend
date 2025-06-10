// import { useState } from "react";

// export const useNodeState = (id, data, nodeType = "input") => {
//     // Generate default name based on node type and id
//     const generateDefaultName = () => {
//         // Extract number from id (e.g., "customInput-1" -> "1")
//         const match = id.match(/(\d+)$/);
//         const nodeNumber = match ? match[1] : "1";

//         // Handle different node types
//         switch (nodeType) {
//             case "input":
//                 return `input_${nodeNumber}`;
//             case "output":
//                 return `output_${nodeNumber}`;
//             case "llm":
//                 return `llm_${nodeNumber}`;
//             case "text":
//                 return `text_${nodeNumber}`;
//             default:
//                 return `${nodeType}_${nodeNumber}`;
//         }
//     };

//     // Handle different data property names for different node types
//     const getInitialName = () => {
//         if (data?.inputName) return data.inputName;
//         if (data?.outputName) return data.outputName;
//         if (data?.name) return data.name;

//         // Fallback to original logic for backwards compatibility
//         if (nodeType === "input" && id.includes("customInput-")) {
//             return id.replace("customInput-", "input_");
//         }
//         if (nodeType === "output" && id.includes("customOutput-")) {
//             return id.replace("customOutput-", "output_");
//         }

//         return generateDefaultName();
//     };

//     // State for node name
//     const [currName, setCurrName] = useState(getInitialName());

//     // State for node type/variant (for input nodes: Text/File, for LLM nodes: OpenAI/Anthropic, etc.)
//     const [nodeVariant, setNodeVariant] = useState(() => {
//         if (data?.inputType) return data.inputType;
//         if (data?.outputType) return data.outputType;
//         if (data?.llmType) return data.llmType;
//         if (data?.type) return data.type;
//         return getDefaultVariant(nodeType);
//     });

//     // State for text content (for text nodes or nodes with text areas)
//     const [textContent, setTextContent] = useState(data?.text || "");

//     // Common event handlers
//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleVariantChange = (e) => {
//         setNodeVariant(e.target.value);
//     };

//     const handleTextChange = (e) => {
//         setTextContent(e.target.value);
//     };

//     return {
//         // State values
//         currName,
//         nodeVariant,
//         textContent,

//         // State setters (for direct manipulation if needed)
//         setCurrName,
//         setNodeVariant,
//         setTextContent,

//         // Event handlers
//         handleNameChange,
//         handleVariantChange,
//         handleTextChange,
//     };
// };

// // Helper function to get default variant based on node type
// const getDefaultVariant = (nodeType) => {
//     switch (nodeType) {
//         case "input":
//             return "Text";
//         case "output":
//             return "Text";
//         case "llm":
//             return ["OpenAI", "Anthropic"][Math.floor(Math.random() * 2)];
//         case "text":
//             return "Text";
//         default:
//             return "Text";
//     }
// };

// // Specific hooks for each node type for convenience
// export const useInputNodeState = (id, data) => useNodeState(id, data, "input");
// export const useOutputNodeState = (id, data) =>
//     useNodeState(id, data, "output");
// export const useLLMNodeState = (id, data) => useNodeState(id, data, "llm");
// export const useTextNodeState = (id, data) => useNodeState(id, data, "text");

//
//
//
//
//
//
// //-------------------------------------------------------------------`
// // updated nodeSTate afte creating outputNode LLM node and TextNode
// import { useState } from "react";

// export const useNodeState = (id, data, nodeType = "input") => {
//     // Generate default name based on node type and id
//     const generateDefaultName = () => {
//         // Extract number from id (e.g., "customInput-1" -> "1")
//         const match = id.match(/(\d+)$/);
//         const nodeNumber = match ? match[1] : "1";

//         // Handle different node types
//         switch (nodeType) {
//             case "input":
//                 return `input_${nodeNumber}`;
//             case "output":
//                 return `output_${nodeNumber}`;
//             case "llm":
//                 return `llm_${nodeNumber}`;
//             case "text":
//                 return `text_${nodeNumber}`;
//             default:
//                 return `${nodeType}_${nodeNumber}`;
//         }
//     };

//     // Handle different data property names for different node types
//     const getInitialName = () => {
//         if (data?.inputName) return data.inputName;
//         if (data?.outputName) return data.outputName;
//         if (data?.name) return data.name;

//         // Fallback to original logic for backwards compatibility
//         if (nodeType === "input" && id.includes("customInput-")) {
//             return id.replace("customInput-", "input_");
//         }
//         if (nodeType === "output" && id.includes("customOutput-")) {
//             return id.replace("customOutput-", "output_");
//         }
//         if (nodeType === "llm" && id.includes("customLLM-")) {
//             return id.replace("customLLM-", "llm_");
//         }
//         if (nodeType === "text" && id.includes("customText-")) {
//             return id.replace("customText-", "text_");
//         }

//         return generateDefaultName();
//     };

//     // State for node name
//     const [currName, setCurrName] = useState(getInitialName());

//     // State for node type/variant
//     const [nodeVariant, setNodeVariant] = useState(() => {
//         if (data?.inputType) return data.inputType;
//         if (data?.outputType) return data.outputType;
//         if (data?.llmType) return data.llmType;
//         if (data?.type) return data.type;
//         return getDefaultVariant(nodeType);
//     });

//     // State for text content
//     const [textContent, setTextContent] = useState(data?.text || "");

//     // Common event handlers
//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleVariantChange = (e) => {
//         setNodeVariant(e.target.value);
//     };

//     const handleTextChange = (e) => {
//         setTextContent(e.target.value);
//     };

//     return {
//         // State values
//         currName,
//         nodeVariant,
//         textContent,

//         // State setters
//         setCurrName,
//         setNodeVariant,
//         setTextContent,

//         // Event handlers
//         handleNameChange,
//         handleVariantChange,
//         handleTextChange,
//     };
// };

// // Helper function to get default variant based on node type
// const getDefaultVariant = (nodeType) => {
//     switch (nodeType) {
//         case "input":
//             return "Text";
//         case "output":
//             return "Text";
//         case "llm":
//             return "OpenAI";
//         case "text":
//             return "Text";
//         default:
//             return "Text";
//     }
// };

// //
// //------------------------------------------------------------------
// //
// // updated useNodeState after adding extraNodes
// import { useState } from "react";

// export const useNodeState = (id, data, nodeType = "input") => {
//     // Generate default name based on node type and id
//     const generateDefaultName = () => {
//         const match = id.match(/(\d+)$/);
//         const nodeNumber = match ? match[1] : "1";

//         switch (nodeType) {
//             case "input":
//                 return `input_${nodeNumber}`;
//             case "output":
//                 return `output_${nodeNumber}`;
//             case "llm":
//                 return `llm_${nodeNumber}`;
//             case "text":
//                 return `text_${nodeNumber}`;
//             case "database":
//                 return `database_${nodeNumber}`;
//             case "api":
//                 return `api_${nodeNumber}`;
//             case "filter":
//                 return `filter_${nodeNumber}`;
//             case "transform":
//                 return `transform_${nodeNumber}`;
//             case "notification":
//                 return `notification_${nodeNumber}`;
//             default:
//                 return `${nodeType}_${nodeNumber}`;
//         }
//     };

//     // Handle different data property names for different node types
//     const getInitialName = () => {
//         if (data?.inputName) return data.inputName;
//         if (data?.outputName) return data.outputName;
//         if (data?.name) return data.name;

//         // Fallback logic for all node types
//         const typeMap = {
//             input: "customInput-",
//             output: "customOutput-",
//             llm: "customLLM-",
//             text: "customText-",
//             database: "customDatabase-",
//             api: "customAPI-",
//             filter: "customFilter-",
//             transform: "customTransform-",
//             notification: "customNotification-",
//         };

//         const prefix = typeMap[nodeType];
//         if (prefix && id.includes(prefix)) {
//             return id.replace(prefix, `${nodeType}_`);
//         }

//         return generateDefaultName();
//     };

//     // State for node name
//     const [currName, setCurrName] = useState(getInitialName());

//     // State for node type/variant
//     const [nodeVariant, setNodeVariant] = useState(() => {
//         if (data?.inputType) return data.inputType;
//         if (data?.outputType) return data.outputType;
//         if (data?.llmType) return data.llmType;
//         if (data?.type) return data.type;
//         return getDefaultVariant(nodeType);
//     });

//     // State for text content
//     const [textContent, setTextContent] = useState(data?.text || "");

//     // Common event handlers
//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleVariantChange = (e) => {
//         setNodeVariant(e.target.value);
//     };

//     const handleTextChange = (e) => {
//         setTextContent(e.target.value);
//     };

//     return {
//         currName,
//         nodeVariant,
//         textContent,
//         setCurrName,
//         setNodeVariant,
//         setTextContent,
//         handleNameChange,
//         handleVariantChange,
//         handleTextChange,
//     };
// };

// // Helper function to get default variant based on node type
// const getDefaultVariant = (nodeType) => {
//     switch (nodeType) {
//         case "input":
//         case "output":
//         case "text":
//             return "Text";
//         case "llm":
//             return "OpenAI";
//         case "database":
//             return "MySQL";
//         case "api":
//             return "GET";
//         case "filter":
//             return "equals";
//         case "transform":
//             return "JavaScript";
//         case "notification":
//             return "Email";
//         default:
//             return "Text";
//     }
// };



/*

Updated useNodeState as data in store is not changing it remains same but it needs to be sync with ui 


*/

import { useState, useEffect } from "react";
import { useStore } from "../store";

// Debounce function
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const useNodeState = (id, data, nodeType = "input") => {
    // Get the existing updateNodeField action from store
    const updateNodeField = useStore(state => state.updateNodeField);

    // Generate default name based on node type and id
    const generateDefaultName = () => {
        const match = id.match(/(\d+)$/);
        const nodeNumber = match ? match[1] : "1";

        switch (nodeType) {
            case "input":
                return `input_${nodeNumber}`;
            case "output":
                return `output_${nodeNumber}`;
            case "llm":
                return `llm_${nodeNumber}`;
            case "text":
                return `text_${nodeNumber}`;
            case "database":
                return `database_${nodeNumber}`;
            case "api":
                return `api_${nodeNumber}`;
            case "filter":
                return `filter_${nodeNumber}`;
            case "transform":
                return `transform_${nodeNumber}`;
            case "notification":
                return `notification_${nodeNumber}`;
            default:
                return `${nodeType}_${nodeNumber}`;
        }
    };

    // Handle different data property names for different node types
    const getInitialName = () => {
        if (data?.inputName) return data.inputName;
        if (data?.outputName) return data.outputName;
        if (data?.name) return data.name;

        // Fallback logic for all node types
        const typeMap = {
            input: "customInput-",
            output: "customOutput-",
            llm: "customLLM-",
            text: "customText-",
            database: "customDatabase-",
            api: "customAPI-",
            filter: "customFilter-",
            transform: "customTransform-",
            notification: "customNotification-",
        };

        const prefix = typeMap[nodeType];
        if (prefix && id.includes(prefix)) {
            return id.replace(prefix, `${nodeType}_`);
        }

        return generateDefaultName();
    };

    // Get default variant based on node type
    const getDefaultVariant = (nodeType) => {
        switch (nodeType) {
            case "input":
            case "output":
            case "text":
                return "Text";
            case "llm":
                return "OpenAI";
            case "database":
                return "MySQL";
            case "api":
                return "GET";
            case "filter":
                return "equals";
            case "transform":
                return "JavaScript";
            case "notification":
                return "Email";
            default:
                return "Text";
        }
    };

    // State for node name
    const [currName, setCurrName] = useState(getInitialName());

    // State for node type/variant
    const [nodeVariant, setNodeVariant] = useState(() => {
        if (data?.inputType) return data.inputType;
        if (data?.outputType) return data.outputType;
        if (data?.llmType) return data.llmType;
        if (data?.type) return data.type;
        return getDefaultVariant(nodeType);
    });

    // State for text content
    const [textContent, setTextContent] = useState(data?.text || "");

    // Debounced values (wait 500ms after user stops typing)
    const debouncedName = useDebounce(currName, 500);
    const debouncedVariant = useDebounce(nodeVariant, 300);
    const debouncedText = useDebounce(textContent, 500);

    // Update store when debounced name changes
    useEffect(() => {
        if (debouncedName !== getInitialName()) {
            const nameField = getNameFieldForNodeType(nodeType);
            updateNodeField(id, nameField, debouncedName);
        }
    }, [debouncedName, id, nodeType, updateNodeField]);

    // Update store when debounced variant changes
    useEffect(() => {
        if (debouncedVariant !== getDefaultVariant(nodeType)) {
            const variantField = getVariantFieldForNodeType(nodeType);
            updateNodeField(id, variantField, debouncedVariant);
        }
    }, [debouncedVariant, id, nodeType, updateNodeField]);

    // Update store when debounced text changes
    useEffect(() => {
        if (debouncedText !== (data?.text || "")) {
            updateNodeField(id, "text", debouncedText);
        }
    }, [debouncedText, id, updateNodeField]);

    // Common event handlers
    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleVariantChange = (e) => {
        setNodeVariant(e.target.value);
    };

    const handleTextChange = (e) => {
        setTextContent(e.target.value);
    };

    return {
        currName,
        nodeVariant,
        textContent,
        setCurrName,
        setNodeVariant,
        setTextContent,
        handleNameChange,
        handleVariantChange,
        handleTextChange,
    };
};

// Helper function to get the correct name field based on node type
const getNameFieldForNodeType = (nodeType) => {
    switch (nodeType) {
        case "input":
            return "inputName";
        case "output":
            return "outputName";
        case "llm":
        case "text":
        case "database":
        case "api":
        case "filter":
        case "transform":
        case "notification":
            return "name";
        default:
            return "name";
    }
};

// Helper function to get the correct variant field based on node type
const getVariantFieldForNodeType = (nodeType) => {
    switch (nodeType) {
        case "input":
            return "inputType";
        case "output":
            return "outputType";
        case "llm":
            return "llmType";
        case "text":
        case "database":
        case "api":
        case "filter":
        case "transform":
        case "notification":
            return "type";
        default:
            return "type";
    }
};