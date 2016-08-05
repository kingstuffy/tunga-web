import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Avatar from './Avatar'
import SearchBox from './SearchBox'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    static propTypes = {
        Auth: PropTypes.shape({
            isAuthenticating: PropTypes.bool.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
            user: PropTypes.object
        }).isRequired
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.AuthActions.logout();
    }

    render() {
        const { Auth } = this.props;
        return (
            <div className="navbar-wrapper row">
                <nav className="navbar navbar-fixed-top navbar-inverse">
                    <div className="container-fluid">
                        <div className="row navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand"><img src={require('../images/tunga-newlogo-small.png')} /></Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            {Auth.isAuthenticated?(
                            <ul className="nav navbar-nav navbar-right">
                                <li><SearchBox placeholder="Search" hide_results={true}/></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        {Auth.user.display_name} <span className="caret" style={{marginLeft: 5+'px'}}></span> <Avatar src={Auth.user.avatar_url}/>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/profile"><i className="nav-icon tunga-icon-profile"/> My Profile</Link></li>
                                        <li><Link to="/settings"><i className="nav-icon tunga-icon-settings"/> Settings</Link></li>
                                        <li role="separator" className="divider"/>
                                        <li><Link to="" onClick={this.handleLogout}><i className="nav-icon tunga-icon-sign-out"/> Sign Out</Link></li>
                                    </ul>
                                </li>
                            </ul>
                                ):(
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/signup">JOIN</Link></li>
                                <li><Link to="/signin">LOGIN</Link></li>
                            </ul>
                                )}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
