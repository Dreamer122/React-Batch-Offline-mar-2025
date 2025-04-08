 import React,{Component} from 'react'
import {Child} from "./Child"


export class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      count1:0
    }
   this.inter= setInterval(()=>{
      console.log("interval called")
    },1000)
    
    console.log("constructor called")

    
  }
 componentDidMount(){

    console.log('parent component componentDidMount')
  }
  componentDidUpdate(prevprops,prevstates){
    // if(this.state.count!=prevstates.count){
    //   console.log('parent component componentDidUpdate')
    // }
    // if(this.state.count1!=prevstates.count1){
    //   console.log('parent component componentDidUpdate')
    // }
    console.log("did update")
  }
  componentWillUnmount(){
    clearInterval(this.inter)
    console.log("component ummount")
  }


  render(){
    console.log("render function")
   return(
    <>
     <h1>Home </h1>
     <p>{this.props.name}</p>
     <p>count:{this.state.count}</p>
     <p>count1:{this.state.count1}</p>
     <button onClick={()=>{
      this.setState({
        count:this.state.count+1,
        count1:2
      })
     }}>click</button>

     <Child name={"first child"}/>
     {/* <Child name={"second child"}/> */}
    </>
    )
  }

}

/*

parent constructor
parent render
  first child constructor
  first child render
  second constructor
  second render
  first mount
  second mount
parent mount


child did mount
parent didmount

*/
