
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Adress from './components/profile/Adress';
import Intro from './components/profile/Intro';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      {/* <FullName/>
      <Adress/>  */}
      <Intro/> 
    </div>
  );
}

export default App;
