import  React,{FC} from 'react';
import { BrowserRouter as Router, Route, Switch , Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Upload from '../Pages/Upload';
import Employes from '../Pages/Employees';
import RouteProtect from './RouteProtect';
import Context from './Context';

import Navbar from '../Layouts/Navbar';

const App: FC = () => {
    return (
        <Router>
            <Context>
                <Switch>
                    <Route  path='/' component={Home} exact/>
                    <Navbar>
                        <RouteProtect path='/employes' component={Employes} exact/>
                        <RouteProtect path='/upload' component={Upload} exact/>
                    </Navbar>
                    <Route component={() => <Redirect to="/" />} />
                </Switch>
            </Context>
        </Router>
    )
}
export default App