(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(3),c=n(4),i=n(1),u=n(6),o=n(5),r=n(2),h=n.n(r),d=n(8),l=n.n(d),p=(n(15),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).playFunc=a.playFunc.bind(Object(i.a)(a)),a.volumeChange=a.volumeChange.bind(Object(i.a)(a)),a.checkChange=a.checkChange.bind(Object(i.a)(a)),a.state={display:{__html:"&nbsp"},volume:.5,checked:!1},a}return Object(c.a)(n,[{key:"playFunc",value:function(e){this.setState({display:{__html:e}})}},{key:"volumeChange",value:function(e){this.setState({volume:e}),this.setState({display:{__html:"Volume: "+100*e}})}},{key:"checkChange",value:function(e){this.setState({checked:!this.state.checked})}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"drum-machine",children:Object(p.jsxs)("div",{id:"drum-machine-box",children:[Object(p.jsx)(v,{playFunc:this.playFunc,volume:this.state.volume,group:this.state.checked?1:0}),Object(p.jsx)(y,{displayCon:this.state.display,volume:100*this.state.volume,volumeChange:this.volumeChange,checkChange:this.checkChange})]})})}}]),n}(h.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={name:["Q","W","E","A","S","D","Z","X","C"],soundSrc:[["Heater-1","Heater-2","Heater-3","Heater-4_1","Heater-6","Dsc_Oh","Kick_n_Hat","RP4_KICK_1","Cev_H2"],["Chord_1","Chord_2","Chord_3","Give_us_a_light","Dry_Ohh","Bld_H1","punchy_kick_1","side_stick_1","Brk_Snr"]],soundString:[["Heater-1","Heater-2"," Heater-3","Heater-4","Clip","Open-HH","Kick-n'-Hat","Kick","Closed-HH"],["Chord-1","Chord-2","Chord-3","Shaker","Open-HH","Closed-HH","Punchy-Kick","Side-Stick","Snare"]],keyCode:{81:0,87:1,69:2,65:3,83:4,68:5,90:6,88:7,67:8}},a.keyPressFunc=a.keyPressFunc.bind(Object(i.a)(a)),a}return Object(c.a)(n,[{key:"renderPad",value:function(){var e=this;return Object(a.a)(Array(9).keys()).map((function(t){return Object(p.jsxs)("button",{className:"drum-pad",id:e.state.name[t]+"clip",onClick:function(){return e.playAudio(t)},children:[Object(p.jsx)("audio",{id:e.state.name[t],src:"https://s3.amazonaws.com/freecodecamp/drums/"+e.state.soundSrc[e.props.group][t]+".mp3",className:"clip"}),e.state.name[t]]})}))}},{key:"playAudio",value:function(e){var t=document.getElementById(this.state.name[e]);t.volume=this.props.volume,t.play(),this.props.playFunc(this.state.soundString[this.props.group][e])}},{key:"keyPressFunc",value:function(e){void 0!==this.state.keyCode[e.keyCode]&&this.playAudio(this.state.keyCode[e.keyCode])}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPressFunc)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPressFunc)}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"pad-panel",children:this.renderPad()})}}]),n}(h.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).volumeChange=a.volumeChange.bind(Object(i.a)(a)),a.state={volume:a.props.volume},a}return Object(c.a)(n,[{key:"volumeChange",value:function(e){this.setState({volume:e.target.value}),this.props.volumeChange(e.target.value/100)}},{key:"render",value:function(){return Object(p.jsxs)("div",{id:"display",children:[Object(p.jsx)("div",{id:"display-content",dangerouslySetInnerHTML:this.props.displayCon}),Object(p.jsx)("input",{type:"range",id:"volume",min:"0",max:"100",step:"1",value:this.state.volume,onChange:this.volumeChange}),Object(p.jsxs)("div",{id:"bank",children:[Object(p.jsx)("div",{children:"Bank"}),Object(p.jsxs)("label",{className:"switch",children:[Object(p.jsx)("input",{type:"checkbox",onChange:this.props.checkChange}),Object(p.jsx)("span",{className:"slider"})]})]})]})}}]),n}(h.a.Component);l.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))},15:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.302ad33f.chunk.js.map