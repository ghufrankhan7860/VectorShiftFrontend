import axiosClient from "./clients/axiosClient";
import { useStore } from "./store";
import { v4 as uuidv4 } from "uuid";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleOnClick = async () => {
    try {
      const idToUUIDMap = new Map();
      nodes.forEach((node) => idToUUIDMap.set(node.id, uuidv4()));
      const uuidEdges = edges.map((edge) => [
        idToUUIDMap.get(edge.source),
        idToUUIDMap.get(edge.target),
      ]);
      const nodesUUIDs = nodes.map((node) => idToUUIDMap.get(node.id));

      const response = await axiosClient.post(`/pipelines/parse`, {
        pipeline: {
          nodes: nodesUUIDs,
          edges: uuidEdges,
        },
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
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
      <button
        type="button"
        style={{
          backgroundColor: "#111111",
          padding: "10px 20px",
          borderRadius: "10px",
          color: "#efefef",
        }}
        onClick={handleOnClick}
      >
        Submit
      </button>
    </div>
  );
};
