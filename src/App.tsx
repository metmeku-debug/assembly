import { useState } from 'react'
import './App.css'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import Words from './Words'

export default function App() {
  const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const [wordState, setWordState] = useState(words.map(eachword => {
    return {word: eachword, isSelected: false, answer: false}
  }))
  const [currentWord, setCurrentWord] = useState(() => wordObjCreator())
  const [incorrect, setincorrect] = useState(0)
  const [correct, setcorrect] = useState(0)
  const gameended = incorrect >= 8 || correct  == currentWord.length * 2
  
  function wordObjCreator(){
    const theword = Words().toUpperCase()
    setWordState((prevstate) => {
      return prevstate.map((wordobj) => {
        if(theword.indexOf(wordobj.word) !== -1){
          return {...wordobj, answer: true}
        }
        else{
          return wordobj
        }
      })
    })
    const newArr = []
    for(let i = 0; i < theword.length; i++){
      const wordobj = {letter: theword[i], isFound: false}
      newArr.push(wordobj)
    }
    console.log(newArr)
    return newArr

  }
  function keyBoardClick (wordClicked: string){
    if (gameended){
      return
    }
    let isItcorrect = false
    let again = false
    let numcorrect = 0
    setWordState((prevWord => {
      return prevWord.map((wordOb) =>{
        if(wordOb.word == wordClicked){
          if(wordOb.isSelected == true){
            again= true
          }
          return {...wordOb, isSelected: true}
        }
        else{return wordOb}
      })
    }))
    setCurrentWord((prevcurrent) => {
      return prevcurrent.map((eachletterObj) =>{
        if(eachletterObj.letter == wordClicked){
          isItcorrect = true
          numcorrect ++
          return {...eachletterObj, isFound: true}
        }else{ 
          return eachletterObj}
      })
      })
      setincorrect(prevnum => {
        if(again){
          return prevnum
        }
        if(isItcorrect){
          return prevnum
        } else{
          return prevnum + 1
        }
      })
      setcorrect(prevnum => {
        if(again){
          return prevnum
        }
        if(isItcorrect){
          return prevnum + numcorrect
        } else{
          return prevnum
        }
      })
      
  }
  function newgame() {
    setCurrentWord(wordObjCreator())
    setWordState(words.map(eachword => {
      return {word: eachword, isSelected: false, answer: false}
    }))
    setcorrect(0)
    setincorrect(0)


  }
  return (
    <div className="assembly">
      <div className="text">
        <h2>Assembly: Endgame</h2>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        {incorrect >= 8 || correct  == currentWord.length * 2 ? 
        <div className='header-message'>{incorrect >= 8 ? 
        <div className='winlose' style={{backgroundColor: "#BA2A2A"}}>
          <h2>Game Over</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </div> : 
        <div className='winlose' style={{backgroundColor: "#10A95B"}}>
          <h2>You Win !</h2>
          <p>Well done ! 🎉</p>
        </div>}
        </div> : null}
      </div>
      <Languages incorrect = {incorrect}/>
      <Word word = {currentWord}/>
      <Keyboard 
        letters = {wordState} 
        keyBoardClick = {keyBoardClick} 
      />
      {incorrect >= 8 || correct  == currentWord.length * 2 ? <button className='newGame' onClick={newgame}>New Game</button>: null}
    </div>
  )
}

