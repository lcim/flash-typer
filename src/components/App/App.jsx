import React from  'react'
import './App.css'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import TypingField from '../TypingField/TypingField'
import {SAMPLE_PARAGRAPHS} from './../../data/data'

// const fetchURL = "http://metaphorpsum.com/paragraphs/1/9"
const TotalTime = 60
const DefaultStateObject = {
  sampleText: '',
  words: 0,
  characters: 0,
  timeLeft: TotalTime,
  timerStarted: false,
  speed: 0,
  textInfo: [],
}

class App extends React.Component {
  
  state = DefaultStateObject;

  initState = () => {
    const sampleText = SAMPLE_PARAGRAPHS[(Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length))];

    const selectedCharactersArray = sampleText.split('')
    const selectedCharacter = selectedCharactersArray.map(xter => {
      return {selectedChar: xter, status: "notAttempted"}
    })

    this.setState({
      ...DefaultStateObject,
      sampleText,
      textInfo: selectedCharacter
    })
  }

  componentDidMount() {
  this.initState()
  }  
  
  startTimer = () => {
    this.setState({ timerStarted: true })

    const timer = setInterval(() => {
      if (this.state.timeLeft > 0) {
        const timeUsedUp = TotalTime - this.state.timeLeft;
        const speed = timeUsedUp > 0 ? (this.state.words / timeUsedUp) * TotalTime : 0;

        this.setState({
          speed: parseInt(speed),
          timeLeft: this.state.timeLeft - 1
        })
      } else clearInterval(timer)
    }, 1000);
  }

  retakeTest = () => {
    this.setState(this.initState())
  }

  handleInput = (inputText) => {
    if (!this.state.timerStarted) this.startTimer();

    const characters = inputText.length;
    const words = inputText.split(' ').length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        textInfo: [
          {
            selectedChar: this.state.textInfo[0].selectedChar,
            status: "notAttempted"
          },
          ...this.state.textInfo.slice(1)
        ],
        words,
        characters
      })

      return;
    }

    if (index >= this.state.sampleText.length) {
      this.setState({ words, characters });
      return;
    }

    const textInfoCopy = this.state.textInfo;
    if (!(index === this.state.sampleText.length - 1)) {
      textInfoCopy[index + 1].status = "notAttempted";
    }
    // check for the correctly typed letter

		const isCorrect = inputText[index] === textInfoCopy[index].selectedChar;

		// update the textInfo

    textInfoCopy[index].status = isCorrect ? "correct" : "incorrect";
    
    // update state

		this.setState({
			textInfo: textInfoCopy,
			words,
			characters,
    })
        
  }
  
  render() {
    return (
      <div className="app">
        <Nav />
        <LandingPage />
        <TypingField
          timeLeft={this.state.timeLeft}
          timerStarted={this.state.timerStarted}
          characters={this.state.characters}
          words={this.state.words}
          speed={this.state.speed}
          sampleText={this.state.sampleText}
          handleInput={this.handleInput}
          retakeTest={this.retakeTest}
          textInfo={this.state.textInfo}
        />
        <Footer />
      </div>
    )
  }
}

export default App
