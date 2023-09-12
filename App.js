import  React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';


export default function App() {  

const [initimer, setInitimer] = useState(false);
const [minutes, setMinutes] = useState(25);
const [seconds, setSecounds] = useState(0);
const [message, setMessage] = useState('Time Work!');
const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timeSeconds = seconds < 10 ? `0${seconds}` : seconds;
const messager = initimer == true ? 'true' : 'false';

useEffect(() => {  
  if (initimer == true){
    let interval = setInterval(() => {
      clearInterval(interval);
      if(minutes == 0 && seconds == 0){
        setMinutes(10);
        setSecounds(0);
        setMessage('Hour Break!');
      }    
      if(seconds === 0){    
        setSecounds(59);
        setMinutes(minutes - 1);}
      else{    
        setSecounds(seconds - 1);}
}, 1000);
  }}, [seconds]);
  


  return (
    <View style={styles.container}>
      <View style={styles.navbar}>        
      </View>      
          <TouchableOpacity 
            style={styles.buttonplay} 
            onPress={(() =>{
              if (initimer == false) {
                setInitimer(true)
              }
              else {
                setInitimer(false)
              }
            })}>          
            <Image style={styles.buttonplay} source={require('./assets/img/play.png')}/>
          </TouchableOpacity>
          <View style={styles.containerGeral}>
            <Text>{timerMinutes}:{timeSeconds} and {messager}</Text>
            <TouchableOpacity 
              style={styles.botaoreiniciar}
              onPress={(() =>{
                setMinutes(0);setSecounds(10)
              })}
            >
                <Text style={styles.botaoreiniciar}>Reiniciar</Text>
            </TouchableOpacity>            
            <Text>{message}</Text>
          </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#990',
    alignItems: 'center'
  },
  containerGeral:{
    flexDirection:'column'
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: "#590",
    width: 420,
    height: 40
  },
  buttonplay: {
    width: 400,
    height: 250,
    alignContent: 'center',
    marginTop: 100,
    marginBottom: 175
  },
  botaoreiniciar:{
    marginTop: 30,
    textAlign: 'center',
    flex: 1
  }
});
