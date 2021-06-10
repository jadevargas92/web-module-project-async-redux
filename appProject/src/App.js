import { getRickMorty } from './actions/someActions';
import './App.css';
import RickMorty from './components/RickMorty'
import { connect } from 'react-redux'
import { CardButton } from './style/RickMortyStyledElements'




const App = (props) => {

  const getRickMortyHandler = (e) => {
    e.preventDefault()
    console.log('clicked')
    props.getRickMorty()
  }

  return (
    <div>
      <CardButton onClick={getRickMortyHandler}> GET A RICK AND MORTY CHARACTER </CardButton>
      <RickMorty />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rickMorty: state.rickMorty
  }
}

export default connect(mapStateToProps, { getRickMorty })(App);
