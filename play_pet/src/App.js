import Posting from './container/Posting';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Posting} />
      </Switch>
    </div>
  );
}
export default App;
