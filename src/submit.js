
export const SubmitButton = () => {
    const handleOnClick = ()=>{
        try{

        }catch(err){
            console.log()
        }
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="button" onClick={handleOnClick}>Submit</button>
        </div>
    );
}
