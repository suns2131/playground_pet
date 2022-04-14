
import Posting from './container/Posting';
import { Route, Switch } from 'react-router-dom';
import Name from './container/Name';
import ImageCard from './componets/ImageCard';
import PostList from './container/PostList';
import Login from './container/Login';
import Signup from './container/Signup';
import List_post from './container/List_post';
import Login_Kakao from './componets/Login_kakao';
import PostDetail from './container/PostDetail';
import Post from "./components/Post";




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Login} />
        <Route path={'/name'} exact component={Name} />
        <Route path={'/list'} exact component={PostList}/>
        <Route path={'/post'} exact component={Posting} />
        <Route path={'/Signup'} exact component={Signup} />
        <Route path={'/user/kakao/callback'} exact component = {Login_Kakao}/>
        <Route path={'/Detail/:postid'} exact component = {PostDetail}/>
      </Switch>
    </div>
  );
}
export default App;

