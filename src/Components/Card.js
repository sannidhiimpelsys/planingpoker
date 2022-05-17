import './poker.css'


const Card = ({ value, onClick, index, isDescription, isJira}) => {
  const unknown = "question mark"
  console.log(isDescription, isJira);
  return (
      // <div className="d-flex">
      // {/* <label htmlFor={value} className="sr-only" >Card Clicked is {value==="?" ? unknown : value }</label> */}
      // TODO: change by ayush 
      <button id={value} disabled={!(!isJira || !isDescription)} className="cardBox" onClick={onClick}>
        
       <label className="visuallyhidden" >Pointing Poker Point {value==="?" ? unknown : value }</label>
      <span  className="values">{value}</span>
    </button>
      //  </div>
    
  );
  
};

export default Card;
