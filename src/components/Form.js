import React from 'react'

function Form() {

  
  return (
    <div style={{backgroundColor:'#202225',marginBottom:'20px'}}> <br/>

        <label style={{color:'azure',marginRight:'15px', marginTop:'20px',marginBottom:'20px'}}>Name</label> <br/>
        <input type="name" placeholder="Name" required style={{width:'35%',height:'40px', marginTop:'20px',borderRadius:'5px',border:'1px solid azure',backgroundColor:'transparent',color:'azure'}}/> <br/> <br/> <br/>


        <label  style={{color:'azure',marginRight:'15px',marginBottom:'15px'}}>Secret Code</label> <br/> <br/>
        <input id='code' type="text" placeholder="Secret Code" required  style={{width:'35%',height:'40px',borderRadius:'5px',border:'1px solid azure',backgroundColor:'transparent',color:'azure'}}/>

    
        <input type="submit" placeholder="submit" hidden style={{width:'50%',height:'40px',borderRadius:'5px',border:'1px solid azure',backgroundColor:'transparent',color:'azure'}}/>
    </div>
  )
  var code = document.getElementById("code");

  if(code === 2009){
      console.log("Access Granted");
  }
  else{
      console.log("Access Denied");
  }


}



export default Form