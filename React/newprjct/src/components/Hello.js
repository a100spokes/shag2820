const dispMess = ()=>{return "!returned!"};

function Hello() {
    return <h1>Hello world! {dispMess()}</h1>
}

// const Hello =(props)=> <h1>Helloo world!</h1>
// const Hello =(props)=> <h1>Helloo {props.name}!</h1>
export default Hello;