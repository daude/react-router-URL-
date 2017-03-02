//import {Link} from 'react-router'
//import ReactDOM from 'react-dom'
//import {Link} from 'react-router-dom';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './index'
import Office from './office'
import Class from './class'

const Routes = () => (
	<Router>
		<div>
			<h2>URL change execises</h2>
			<ul>
				<li><Link to='/'> Home </Link></li>
				<li><Link to='/office'> Office </Link></li>
				<li><Link to='/class'> class </Link></li>
			</ul>

			<hr/>
			<Route exact path='/' component={Home} />
			<Route path='/office' component={Office} />
			<Route path='/class' component={Class} />
		</div>
		{/*<div>
			{this.props.Office}
			{this.props.Class}
		</div>*/}
	</Router>
);

export default Routes;
