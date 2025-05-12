import './App.css';

function App() {



  
  return (
    <>


    <div className="outside">
      <h1 className="titile"  >Calculator</h1>


    <div className="first">

      <div className="forcenter"  style={{border:"2px solid black", width:"175px",height:"50px" , margin:"auto"}}>

        <input style={{width:"70px"}}></input>
        <button>prime</button>

      </div>

      <div className="forcenter" style={{border:"2px solid black", width:"175px",height:"50px" , margin:"auto",}}>

        <input style={{width:"70px"}}></input>
        <button>fibonacci</button>

      </div>

      <div className="forcenter" style={{border:"2px solid black", width:"175px",height:"50px" , margin:"auto",}}>

        <input style={{width:"70px"}}></input>
        <button>even</button>

      </div>

      <div className="forcenter" style={{border:"2px solid black", width:"175px",height:"50px" , margin:"auto",}}>

        <input style={{width:"70px"}}></input>
        <button>random</button>

      </div>


    </div>
  

    </div>
    
    
    </>
  );
}

export default App;
