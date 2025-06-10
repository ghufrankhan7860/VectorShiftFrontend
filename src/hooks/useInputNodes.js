import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { useMemo } from "react";

const inputNodesSelector = (state) => ({
    nodes: state.nodes.filter(node => node.type === 'customInput')
});

export const useInputNodes = () => {
    const { nodes } = useStore(inputNodesSelector, shallow);

    const inputNodes = useMemo(() => {
        return nodes.map(node => ({
            id: node.id,
            name: node.data?.inputName ||
                node.data?.name ||
                node.id.replace('customInput-', 'input_'),
            type: node.data?.inputType ||
                node.data?.type ||
                'Text',
            data: node.data
        }));
    }, [nodes]);

    return inputNodes;
};
