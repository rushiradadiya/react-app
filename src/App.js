import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import rootReducer from './reducers';
import Home from "./components/home/home";
import Friend from "./components/friends/friend"
import About from "./components/about/about"

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route exact path={'/'} render={() => {
                            return <Redirect to={'/home'}/>
                        }}/>
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/friends'} component={Friend}/>
                        <Route exact path={'/about'} component={About}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
