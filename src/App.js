import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navigation/Navbar';
import PageNotFound from './utils/PageNotFound';
import PostDetails from './components/Post/PostDetails';
import Footer from './components/Navigation/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/PostDetails">
            <PostDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
