import { useEffect } from 'react';
import { get_candidates } from './API/Apis';
import './App.css';
import Home from './Containers/Home/Home';
import {connect} from 'react-redux'
import {addCandidates} from './Redux/actions'
import { TWITTER_USERS_IDS } from './Utils/Constants';

function App(props) {
  useEffect(() => {
    console.log('x')
    async function getData() {
        const data = await get_candidates(TWITTER_USERS_IDS)
        Promise.all(data).then(res => props.addCandidates(res))
    }
    getData()
  }, [props])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default connect(null,{addCandidates})(App);
