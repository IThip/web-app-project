// import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import DicerollPage from './component/DicerollPage';



function App() {

  

  return (
    <ChakraProvider>
    <div className="App">
    <DicerollPage/>
    </div>
    </ChakraProvider>
  );
}

export default App;
