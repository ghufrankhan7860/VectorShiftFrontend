import { useStore } from "./store";

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    console.log("Nodes:", nodes);
    console.log("Edges:", edges);
    const handleOnClick = () => {
        try {
        } catch (err) {
            console.log();
        }
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <button type="submit">Submit</button>

            <button type="button" onClick={handleOnClick}>
                Submit
            </button>
        </div>
    );
};
