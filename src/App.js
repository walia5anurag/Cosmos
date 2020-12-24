import MainArea from './TopMostArea/mainArea'
import axios from 'axios'

function App() {
  axios.get('http://content.guardianapis.com/tags?api-key=fc9dc684-1029-4847-830a-b19cc6f67841')
  .then(response=>{
    console.log(response.data)
  })
  return (
    <div className="App">
    <MainArea/>
    
    </div>
  );
}

export default App;
