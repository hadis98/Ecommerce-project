import  Homepage from "./pages/homepage/homepage.component";
import { Route , Switch,Link } from "react-router-dom";
import './App.css';
import { render } from "react-dom";
import ShopPage from './pages/shop/shop.components';
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-up";
import {auth  } from "./firebase/firebase.utils";
import React from "react";
// const Hatspage = (props)=>{
//   console.log(props);
//   return(
// <div>
//   <h1>HATS PAGE</h1>
// </div>

//   );
// };

// const Home = (props)=>{
//   console.log(props);
//   return(
//     <div>
//       {/* <Link to='/topics'>Topics</Link> */}
//       <button onClick={()=> props.history.push('/topics')}>Topics</button>
//       <h1>Home page</h1>
//     </div>
//   );
// }

// const TopicList = (props)=>{
//   console.log(props);
//   return(
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`${props.match.url}13`}>TO TOPIC 13</Link>
//       <Link to={`${props.match.url}15`}>TO TOPIC 15</Link>
//       <Link to={`${props.match.url}17`}>TO TOPIC 17</Link>
//     </div>
//   );
// }

// const TopicDetail = (props)=>{
//   console.log(props);
//   return(
//     <div>
//       <h1>TOPIC DETAIL PAGE : { props.match.params.topicId } </h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Route exact path='/' component={Home} />
//       <Route exact path='/topics' component={TopicList} />
//       <Route path='/topics/:topicId' component={TopicDetail} />
//       {/* <Switch>
//         <Route  exact path='/' component={Homepage}/>
//         <Route path='/hats' component={Hatspage}/>
//       </Switch> */}
//       {/* <Homepage/> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{this.setState({currentUser:user})
    console.log(user);
  });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return(
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}
}
export default App;
