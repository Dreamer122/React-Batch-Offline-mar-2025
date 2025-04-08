import React from "react";
export class Child extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor",this.props.name)
    }
    async componentDidMount(){

     const res=   await fetch("https://jsonplaceholder.typicode.com/users");
     const data=await res.json()
     console.log(data)
    console.log("child did mount",this.props.name)
    }
    render(){
        console.log("child render",this.props.name)
        return <div>Child
            {this.props.name}
        </div>;
    }
 }