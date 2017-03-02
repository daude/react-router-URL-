import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
/*import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './index'
import Office from './office'
import Class from './class'*/

ReactDOM.render(/*(
	<Router>
		<div>
			{<h2>URL change execises</h2>
			<ul>
				<li><Link to='/'> Home </Link></li>
				<li><Link to='/office'> Office </Link></li>
				<li><Link to='/class'> class </Link></li>
			</ul>}
			<hr/>
			<Route path='/home' component={Home}/>
			<Route path='/office' component={Office}/>
			<Route path='/class' component={Class}/>
		</div>
	</Router>
	),*/
	<Routes />,
	document.getElementById('root')
);
