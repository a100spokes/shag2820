function Profile (props) {
    const { name, sorname, children } = props;

    return <>{children}
    <h1>Name: {name} {sorname}</h1>
    
    </>
}

export default Profile