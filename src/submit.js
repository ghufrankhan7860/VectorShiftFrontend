<<<<<<< HEAD
// // submit.js

// export const SubmitButton = () => {
//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }

import { useStore } from "./store";
=======
>>>>>>> 989058e15c2bf6b0eee347fc9c708e3531e29204

export const SubmitButton = () => {
    const handleOnClick = ()=>{
        try{

<<<<<<< HEAD
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    console.log("Nodes:", nodes);
    console.log("Edges:", edges);
    const handleOnClick = () => {
        try {


        } catch (err) {
            console.log()
        }
    }

    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


            <button type="submit">Submit</button>


            <button type="button" onClick={handleOnClick}>Submit</button>

=======
        }catch(err){
            console.log()
        }
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="button" onClick={handleOnClick}>Submit</button>
>>>>>>> 989058e15c2bf6b0eee347fc9c708e3531e29204
        </div>

    );

}