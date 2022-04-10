import './App.css';
import  Input from './Input'
import UserGrid from './UserGrid'
import PegaGrid from './PegaGrid'



function App() {
  return (
    <div
        className="App">
        {/* <Input></Input> */}
        <h2>Ngựa</h2>
        <PegaGrid></PegaGrid>
        <h2>User</h2>
        <UserGrid></UserGrid>
    </div>
  );
}



export default App;
