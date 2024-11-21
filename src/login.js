function Login(){

    const Submit =(e)=>{
     e.preventDefault();
        console.log(e);
    }
    return(
        <div>
            <div>
              <p>Login</p>
            </div>
            <form onSubmit={Submit}>
            <input type="text"  onChange={(e)=>e.target.value} placeholder="username"></input>

            <input type="Password" placeholder="Password" onChange={(e)=>e.target.value}></input>
            <div>
                <button type="submit"> login</button>
            </div>
            </form>
        </div>
    )
}
export default Login;