import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {
    cursor: 'X',
    tl: '',
    tm: '',
    tr: '',
    ml: '',
    mm: '',
    mr: '',
    bl: '',
    bm: '',
    br: '',

  }
}
handleStateClear(){
  this.setState({
    cursor: 'X',
    tl: '',
    tm: '',
    tr: '',
    ml: '',
    mm: '',
    mr: '',
    bl: '',
    bm: '',
    br: '',
  })
  
}

handleO(){
  this.setState({
    cursor: 'O'
  })
}
handleX(){
  this.setState({
    cursor: 'X'
  })
}
handleXOSwitch(){
  if(this.state.cursor == 'X'){
    this.setState({
      cursor: 'O'
    })
  }
  else{
    this.setState({
      cursor: 'X'
    })
  }
}
handleTL(){
  this.setState({
    tl: this.state.cursor
  })
  this.handleXOSwitch()
}
handleTM(){
  this.setState({
    tm: this.state.cursor
  })
  this.handleXOSwitch()
}
handleTR(){
  this.setState({
    tr: this.state.cursor
  })
  this.handleXOSwitch()
}
handleML(){
  this.setState({
    ml: this.state.cursor
  })
  this.handleXOSwitch()
}
handleMM(){
  this.setState({
    mm: this.state.cursor
  })
  this.handleXOSwitch()
}
handleMR(){
  this.setState({
    mr: this.state.cursor
  })
  this.handleXOSwitch()
}
handleBL(){
  this.setState({
    bl: this.state.cursor
  })
  this.handleXOSwitch()
}
handleBM(){
  this.setState({
    bm: this.state.cursor
  })
  this.handleXOSwitch()
}
handleBR(){
  this.setState({
    br: this.state.cursor
  })
  this.handleXOSwitch()
}

  render() {
    const {tl, tm, tr, ml, mm, mr, bl, bm, br} = this.state
          if(tl == 'O' && tm == 'O' && tr == 'O'){alert("O wins"); this.handleStateClear() }
          else if(ml == 'O' && mm == 'O' && mr == 'O'){alert("O wins"); this.handleStateClear() }
          else if(bl == 'O' && bm == 'O' && br == 'O'){alert("O wins"); this.handleStateClear() }
          else if(tl == 'O' && ml == 'O' && bl == 'O'){alert("O wins"); this.handleStateClear() }
          else if(tm == 'O' && mm == 'O' && bm == 'O'){alert("O wins"); this.handleStateClear() }
          else if(tr == 'O' && mr == 'O' && br == 'O'){alert("O wins"); this.handleStateClear() }
          else if(tl == 'O' && mm == 'O' && br == 'O'){alert("O wins"); this.handleStateClear() }
          else if(tr == 'O' && mm == 'O' && bl == 'O'){alert("O wins"); this.handleStateClear() }
          else if(tl == 'X' && tm == 'X' && tr == 'X'){alert("X wins"); this.handleStateClear() }
          else if(ml == 'X' && mm == 'X' && mr == 'X'){alert("X wins"); this.handleStateClear() }
          else if(bl == 'X' && bm == 'X' && br == 'X'){alert("X wins"); this.handleStateClear() }
          else if(tl == 'X' && ml == 'X' && bl == 'X'){alert("X wins"); this.handleStateClear() }
          else if(tm == 'X' && mm == 'X' && bm == 'X'){alert("X wins"); this.handleStateClear() }
          else if(tr == 'X' && mr == 'X' && br == 'X'){alert("X wins"); this.handleStateClear() }
          else if(tl == 'X' && mm == 'X' && br == 'X'){alert("X wins"); this.handleStateClear() }
          else if(tr == 'X' && mm == 'X' && bl == 'X'){alert("X wins"); this.handleStateClear() }
          else if(tr !== '' &&
            tm !== '' &&
            tl !== '' &&
            ml !== '' &&
            mm !== '' &&
            mr !== '' &&
            br !== '' &&
            bm !== '' &&
            bl !== ''){alert("Cat, try again"); this.handleStateClear()}
    return (
      <div className="App">
      <div class="board">
          <div class="row">
            <div class="square">
              top left
              <button onClick={e => this.handleTL()}>Mark this Box!</button>
              <div>{tl}</div>
            </div>
            <div class="square">
              top mid
              <button onClick={e => this.handleTM()}>Mark this Box!</button>
              <div>{tm}</div>
            </div>
            <div class="square">
              top right
              <button onClick={e => this.handleTR()}>Mark this Box!</button>
              <div>{tr}</div>
            </div>
          </div>
          <div class="row">
            <div class="square">
              mid left
              <button onClick={e => this.handleML()}>Mark this Box!</button>
              <div>{ml}</div>
              </div>
            <div class="square">
             mid mid
             <button onClick={e => this.handleMM()}>Mark this Box!</button>
             <div>{mm}</div>
            </div>
            <div class="square">
              mid right
              <button onClick={e => this.handleMR()}>Mark this Box!</button>
              <div>{mr}</div>
            </div>
          </div>
          <div class="row">
            <div class="square">
              bot left
              <button onClick={e => this.handleBL()}>Mark this Box!</button>
              <div>{bl}</div>
            </div>
            <div class="square">
              bot mid
              <button onClick={e => this.handleBM()}>Mark this Box!</button>
              <div>{bm}</div>
            </div>
            <div class="square">
              bot right
              <button onClick={e => this.handleBR()}>Mark this Box!</button>
              <div>{br}</div>
            </div>
          </div>
        </div>
        <button onClick={e => this.handleX()}>X</button>
        <button onClick={e => this.handleO()}>O</button>
        <button onClick={e => this.handleStateClear()}>Clear Boxes</button>
        <div>{this.state.cursor}</div>
        
      
          
          
        
          
      </div>
    );
  }
}

export default App;
