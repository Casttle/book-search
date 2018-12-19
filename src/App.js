import React
// , { Component } 
from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/header";
// import SearchBox from "./components/searchBox";
// import ResultsCard from "./components/Results";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch"
import './App.css';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           <Header></Header>
//           <SearchBox></SearchBox>
//           <div className="results">
//             <h2>Results</h2>
//             <ResultsCard></ResultsCard>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;