import Posting from './container/Posting';
import { Route, Switch } from 'react-router-dom';
import ImageCard from './componets/ImageCard';
import Main from './container/main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Posting} />
        <Route path={'/Card'} exact component={Main} />
      </Switch>
    </div>
  );
}
export default App;
