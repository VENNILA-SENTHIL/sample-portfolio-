import "./App.css"
import Button from "./components/Portfolio/Button";
import Sidebar from"./Sidebar";
function App(){
  // const navlist=[
  // {title:"About"},
  // {title:"skills"},
  // {title:"experience"},
  //  ];
  //  function App(){

  //  }
  return(
   <div className="container">
     <Sidebar/>
     <Button/>
    {/* <Mainpage/>  */}
   </div>
  );
  // function onFormSubmit(e){
  //   e.preventDefault();
  //   setData([...DataTransfer,{title:input}])
  //   console.log(input);
  // }
  // return(
  //   <div>
  //     {navlist.map((val)=>{
  //       return(<button>{val.title}</button>);
  //     })}
  //     <form onSubmit={(e)=>{onFormSubmit(e)}}>
  //       <input type="text"
  //       onChange={(e)=>{setInput(e.target.value)}}value={input}/>
  //       <input type="submit"/>
  //     </form>
  //   </div>
  // )
}
   



export default App;
