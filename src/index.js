import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class DrumMachine extends React.Component{
    constructor(props) {
      super(props);
      this.playFunc = this.playFunc.bind(this);
      this.volumeChange = this.volumeChange.bind(this);
      this.checkChange = this.checkChange.bind(this);
      this.state = {
        display:{__html: '&nbsp'},
        volume:0.5,
        checked:false
      };
    }
    
    playFunc(item) {
      this.setState({display: {__html:item}});
    }
    volumeChange(value){
      this.setState({volume: value});
      this.setState({display: {__html:'Volume: '+value*100}});
    }
    checkChange(e){
      this.setState({checked: !this.state.checked});
    }
    
    render() {
      return(      
        <div id="drum-machine">
          <div id="drum-machine-box">
            <PadPanel playFunc = {this.playFunc} volume = {this.state.volume} group={this.state.checked?1:0} />
            <ControlPanel displayCon = {this.state.display} volume={this.state.volume*100} volumeChange={this.volumeChange} checkChange={this.checkChange}/>
          </div>
       </div>
      );   
    }
  }
  
  class PadPanel extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name:['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
        soundSrc: [['Heater-1','Heater-2','Heater-3','Heater-4_1','Heater-6','Dsc_Oh','Kick_n_Hat','RP4_KICK_1','Cev_H2'],['Chord_1','Chord_2','Chord_3','Give_us_a_light','Dry_Ohh','Bld_H1','punchy_kick_1','side_stick_1','Brk_Snr']],
        soundString:[['Heater-1', 'Heater-2',' Heater-3', 'Heater-4', 'Clip','Open-HH', "Kick-n'-Hat", 'Kick','Closed-HH'],['Chord-1','Chord-2','Chord-3','Shaker','Open-HH','Closed-HH','Punchy-Kick','Side-Stick','Snare']],
        keyCode:{81:0,87:1,69:2,65:3,83:4,68:5,90:6,88:7,67:8}
      };
      this.keyPressFunc = this.keyPressFunc.bind(this);
    }
    
    renderPad(){
      let nums = [...Array(9).keys()];
      return (
        nums.map((i) =>
            <button className="drum-pad" id={this.state.name[i]+'clip'} onClick={()=>this.playAudio(i)}><audio id={this.state.name[i]}  src={'https://s3.amazonaws.com/freecodecamp/drums/'+(this.state.soundSrc[this.props.group][i])+'.mp3'} className="clip"></audio>{this.state.name[i]}</button>
              )
      );  
    }
    playAudio(i){
      var aud = document.getElementById(this.state.name[i]);
      aud.volume = this.props.volume;
      // alert(this.props.volume);
      aud.play();
      this.props.playFunc(this.state.soundString[this.props.group][i]);
      return;
    }
    
    keyPressFunc(e){
      if (this.state.keyCode[e.keyCode] !== undefined) this.playAudio(this.state.keyCode[e.keyCode]);
    }
    componentDidMount(){
      document.addEventListener("keydown", this.keyPressFunc);
    }
    componentWillUnmount(){   document.removeEventListener("keydown", this.keyPressFunc);
    }
    
    render(){
      return(
        <div id="pad-panel">
          {this.renderPad()}
        </div>
      );
  }
  
  }
  
  
  
  class ControlPanel extends React.Component{
    constructor(props){
      super(props);
      this.volumeChange = this.volumeChange.bind(this);
      this.state={volume: this.props.volume};
    }
    volumeChange(e){
      this.setState({volume: e.target.value});
      this.props.volumeChange(e.target.value/100);
    }
    
    render(){
      return(
        <div id="display">
          <div id="display-content" dangerouslySetInnerHTML={this.props.displayCon}></div>
          <input type="range" id="volume" min="0" max="100" step="1" value={this.state.volume} onChange={this.volumeChange}/>
          <div id="bank"><div>Bank</div>
            <label className="switch">
      <input type="checkbox" onChange={this.props.checkChange}/>
     <span className="slider"></span>
  </label>
          </div>
        </div>
      );
    }
  }
  
  
  
  
  
  ReactDOM.render(
    <DrumMachine />,
    document.getElementById('root')
  );