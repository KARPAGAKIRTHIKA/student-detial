import { useState } from "react"

function HeaderComponent(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    
    <div><h3>NAME: {props.name}</h3>
    <p className="Regno"> RegisterNo: {props.regno}</p>
    <button onClick={handleClick} className="toggle-button">
        {isClicked ? 'Hide Details' : 'Show Details'}
      </button>
      {isClicked && (
        <p className="message">
         Additional details or content can go here...
        </p>
      )}
    </div>
   
    
  )
}

export default HeaderComponent;
