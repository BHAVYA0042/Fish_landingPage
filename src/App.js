import Bar from "./components/navigation";
import Fish from "./components/Fish";
import { useEffect,useState} from "react";
import Category from "./components/cate";
import Glance from "./components/glance";
import Faq from "./components/faq";
import Read from "./components/Read";
import "./components/comp.css";
import Topic from "./components/topics";
import Footer from "./components/footer";

function App() {
  const [list,setList]=useState([]);

  async function call(){
      try{
        const response=await fetch("https://react-67dc8-default-rtdb.firebaseio.com/categories.json");
        const data=await response.json();
        console.log(data);

        setList(data)
      }catch(error){
        console.log("Some error occured.");
      }
    }
  useEffect(()=>{
    call()
  },[])
  return (
    <div className="App">
      <Bar/>
      <Fish/>
      {list.length > 0 && <Category data={list}/>}
      <Glance />
      <Faq />
      <Read />
      <Topic/>
      <Footer />
    </div>
  );
}

export default App;
