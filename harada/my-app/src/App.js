import React from 'react';
//import logo from './logo.svg';
import './App.css';

function InputForm(props){
  // const items = props.arithmetic;
  // const listItems = items.map((r)=>{
  //   <label>
  //     <input 
  //       type='radio'
  //       name='arithmethic'
  //       value={r.arithmetic.value}
  //       checked={r.arithmetic.checked}
  //       onChange={props.handleRadioClick}
  //     />
  //   </label>
  // })
  return (
    <form onSubmit={props.startCalculator}>
      <input type='tel' value={props.pTerm} onChange={props.updatePTerm} />
      <select onChange={props.updatArithmetic}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <input type='tel' value={props.lTerm} onChange={props.updateLTerm} />
      <input type="submit" value="="/>
    </form>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pTerm:0,
      lTerm:0,
      // arithmetic: [
      //   {value:'+',checked:false},
      //   {value:'-',checked:false},
      //   {value:'*',checked:false},
      //   {value:'/',checked:false},
      // ],
      arithmetic:"+",
      total:0
    };
    this.updatePTerm = this.updatePTerm.bind(this);
    this.updateLTerm = this.updateLTerm.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.startCalculator = this.startCalculator.bind(this);
    this.updatArithmetic = this.updatArithmetic.bind(this);
  }
  updatePTerm(e){
    // const total = this.state.pTerm + this.state.lTerm;
    this.setState({
      pTerm:e.target.value,
      // total:total
    });
  }
  updateLTerm(e){
    // const total = this.state.pTerm + this.state.lTerm;
    this.setState({
      lTerm:e.target.value,
      // total:total
    });
  }
  updatArithmetic(e){
    this.setState({
      arithmetic:e.target.value
    })
  }
  handleRadioClick(e){
    let name = e.target.value
    let value = this.state.arithmetic.map((item)=>{
      return({
        value:item.value,
        checked:(item.value===name)? true:false
      })
    })
    this.setStaet({
      arithmetic:value
    })
  }
  startCalculator(e){
    e.preventDefault();
    let total
    if(this.state.arithmetic==="+"){
      total = Number(this.state.pTerm) + Number(this.state.lTerm);
    }
    if(this.state.arithmetic==="-"){
      total = Number(this.state.pTerm) - Number(this.state.lTerm);
    }
    if(this.state.arithmetic==="*"){
      total = Number(this.state.pTerm) * Number(this.state.lTerm);
    }
    if(this.state.arithmetic==="/"){
      total = Number(this.state.pTerm) / Number(this.state.lTerm);
    }
    this.setState({
      total:total
    });
  }
  render() {
    return(
      <div className="App">
        <InputForm
          updatePTerm={this.updatePTerm}
          updateLTerm={this.updateLTerm}
          handleRadioClick={this.handleRadioClick}
          startCalculator={this.startCalculator}
          updatArithmetic={this.updatArithmetic}
        />
        <div>
          {this.state.total}  
        </div>
      </div>
    )
  }
}
export default App;
