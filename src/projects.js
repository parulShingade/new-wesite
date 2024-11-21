import './projects.css'

function Projects(){


 function foodapp(){
  return(
window.location = "https://parulshingade.netlify.app/FoodApp/"
  );
}

function taxiapp(){
  return(
window.location = "https://parulshingade.netlify.app/Song"
  );
}
  


  return(

    <div >
      <h1>hello</h1>
 <div className='left'>
  
     <img src='https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM='  onClick={foodapp}></img>
     </div>
     <img  src='https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM=' className='right' onClick={taxiapp}></img>
    </div>
  )
}
export default Projects;