import PropTypes from 'prop-types'
import React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes"
// Import all middleware
import Authmiddleware from "./routes/route"
// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"
import IdleTimerContainer from './pages/Idletimer/IdleTimerContainer'
// Import scss
import "./assets/scss/theme.scss"


const App = props => {

  	function getLayout() {
		let layoutCls = VerticalLayout
		switch (props.layout.layoutType) {
			case "horizontal":
				layoutCls = HorizontalLayout
				break
			default:
				layoutCls = VerticalLayout
				break
		}
		return layoutCls
  	}
	const Layout = getLayout()

	

  return (
	  <div>
		<IdleTimerContainer></IdleTimerContainer>
		<React.Fragment>
		<Router>
			<Switch>
				{publicRoutes.map((route, idx) => (
					<Authmiddleware
					path={route.path}
					layout={NonAuthLayout}
					component={route.component}
					key={idx}
					isAuthProtected={false}
					exact
					/>
				))}

				{authProtectedRoutes.map((route, idx) => (
					<Authmiddleware
					path={route.path}
					layout={Layout}
					component={route.component}
					key={idx}
					isAuthProtected={true}
					exact
					/>
				))}
			</Switch>
		</Router>
		</React.Fragment>
	</div>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)