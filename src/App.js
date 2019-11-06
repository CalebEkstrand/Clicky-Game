import React, {Component} from 'react';
import './App.css';
import images from "./images.json";
import Picture from "./components/picture"

class App extends Component {
  state={
    score: 0,
    topScore: 0,
    images:images,
    clickedIds:[]
  }
   photoSelector =event=>{
     const userInput = event.target.dataset.id
     console.log(this.state.clickedIds)
     if(!this.state.clickedIds.includes(userInput)){
       this.setState({
         score: this.state.score+1,
         clickIds: this.state.clickedIds.push(userInput),
         topScore: this.highScore(this.state.score+1),
         images:this.shuffle(this.state.images)
        })
        
     }else {
       this.setState({
         score:0,
         clickedIds:[],
         images:images
        })
     }
   }
   highScore=(score)=>{
    if (score > this.state.topScore){
      return score
    } else {
      return this.state.topScore
    }
   }
    shuffle=(a)=>{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
  render(){
  return (
    <div className="App">
    <h1>Clicky Game | score: <span>{this.state.score}</span> | topScore: <span>{this.state.topScore}</span></h1>
    <div className="container">
    <div className="flex-container">
    {this.state.images.map(image_obj=>(
      <div className="card"style={{width: "14rem"}} key={image_obj.id}>
      <Picture id={image_obj.id} photo={image_obj.photo}func={this.photoSelector}/>
      </div>
    ))}
    </div>
    </div>
    </div>
  );
  }
}

export default App;
