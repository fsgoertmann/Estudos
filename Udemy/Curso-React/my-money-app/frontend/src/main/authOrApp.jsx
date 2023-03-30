import '../commom/template/dependecies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'
import Routes from './routes'

class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return <Routes>{this.props.children}</Routes>
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)