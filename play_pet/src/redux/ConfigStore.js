
import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import Post from "./modules/Post_savestate"
import Login from "./modules/Login_module"
import Comment from "./modules/comment";
import Like_module from './modules/Like_module';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  Like : Like_module,
  Login : Login,
  post: Post,
  comment: Comment,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history:history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
