import './contactme.css';

function Contaceme(){
    
    return(
        <div>
        <div className='contacrtme'>
         
          <h1>contact me</h1>
    
          <form  className='form' action="https://formsubmit.co/54da1010c67bcfa116050507ac3e4380" method="POST">
        
         <input type="text" name="name"  placeholder= "name" required></input>
         <br></br>
         <br></br>
         <input type="email" name="email" placeholder="email" required></input>
         <br></br>
         <br></br>
          <input type="comment" name="comment" placeholder="comment" required></input>
          <br></br>
          <br></br>
         <button type="submit">Send</button>
    </form>

 
        </div>
       
      </div>
    )
}
export default Contaceme;