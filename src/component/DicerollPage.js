// import logo from './logo.svg';
import React from 'react';
import { 
  Button,
  Text,
  Heading
 } from '@chakra-ui/react';
import { useState } from 'react';
// import { Button } from 'bootstrap';
import DiceImage1 from "../images/Dice1.png";
import DiceImage2 from "../images/Dice2.png";
import DiceImage3 from "../images/Dice3.png";
import DiceImage4 from "../images/Dice4.png";
import DiceImage5 from "../images/Dice5.png";
import DiceImage6 from "../images/Dice6.png";




function Diceroll() {

  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]

  

  const [image, setNewImage] = useState(diceImages[0])

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    
    setNewImage(diceImages[randomNum1]);
   
  }


  return (
    <div className="App" >
      <center>
        <Heading m="30px" style={{fontFamily:'FCHomeBlack', fontSize:'40px' , fontWeight:'bold'}} >DICE ROLLER</Heading>
        <div className='container'>
          <img className='square' src ={image}></img>
        </div>
        
        <div>
            <Button bgColor={"#38A169"} _hover={{borderColor:"#38A169" ,border:"2px" ,bgColor:"white" ,color:"#38A169"}} mb="1rem" mt={10} color="white" fontSize="20px"  onClick={rollDice}>Roll Dice</Button>
          <div>
            <Button bgColor={"#DF2E38"} _hover={{borderColor:"#DF2E38" ,border:"2px" ,bgColor:"white" ,color:"#DF2E38"}} mr="1rem"  mt={4} color="white"  >ADD</Button>
            <Button bgColor={"#655DBB"} _hover={{borderColor:"#655DBB" ,border:"2px" ,bgColor:"white" ,color:"#655DBB"}}   mt={4} color="white"  >MUL</Button>
          </div>
        </div>
  
      </center>
    </div>
  );
}

export default Diceroll;
