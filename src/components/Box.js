import Heading from'./Heading';
import Paragraph from './Paragraph';
function Box({head,desc,img}) {
    return (
        <div className='App'>
        <Heading/>
        <Paragraph/>
        <h2>{head}</h2>
        <p>{desc}</p>
        <img src={img}/>
        </div>
  
    );
  }
  export default Box;
