import Posting from './container/Posting';
import { Route, Switch } from 'react-router-dom';
import ImageCard from './componets/ImageCard';
import Main from './container/main';
import PostList from './container/PostList';
import Login from './container/Login';
import Signup from './container/Signup';
import List_post from './container/List_post';
import Login_Kakao from './componets/Login_kakao';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Login} />
        <Route path={'/Card'} exact component={Main} />
        <Route path={'/list'} exact component={List_post}/>
        <Route path={'/post'} exact component={Posting} />
        <Route path={'/Signup'} exact component={Signup} />
        <Route path={'/user/kakao/callback'} component = {Login_Kakao}/>
      </Switch>
    </div>
  );
}
export default App;
