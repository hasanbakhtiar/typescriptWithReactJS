import { BasicData } from './typingProps/BasicData';
import BasicTypingProps from './typingProps/BasicTypingProps';
const productList=[
  {
    title:"test1",
    price:10
  },
  {
    title:"test2",
    price:20
  },
  {
    title:"test3",
    price:30
  },
  {
    title:"test4",
    price:40
  }
]
function App() {
  return (
    <div className="App">
     <BasicTypingProps info="typescript" messageCount={10} isLoggegIn={true}/>
     <BasicData product={productList}/>
    </div>
  );
}

export default App;
