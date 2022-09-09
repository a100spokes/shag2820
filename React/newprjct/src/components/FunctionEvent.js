
export default function FunctionEvent () {
    /* function handleClick (){
        console.log("Event");
    } */

    const handleClick =()=>{
        console.log("Event");

    };

    return (  
        <>
        Function component
        <button onClick={handleClick}>Click</button>
        </>
     )
}
