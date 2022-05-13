import {useState} from "react";
function Quest(props){
  const [show,setShow]=useState(false)
  function showAnswer(){
    setShow(true);
  }
  function hideAnswer(){
    setShow(false);
  }
  return(
    <div className="faq_card">
    <div className="vis">
      <h3>{props.question}</h3>
      {!show && 
        <button>
          <img onClick={showAnswer} src="images\down.png" alt="" />
        </button>
      }
      
      {show && 
        <button>
          <img onClick={hideAnswer} src="images\up.png" alt="" />
        </button>
      }
      
    </div>
    {show && 
      <div className="answer">
      <p>{props.answer}</p>
      </div>}
    </div>
  )
}
export default Quest;