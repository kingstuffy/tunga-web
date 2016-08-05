import React from 'react'
import { Link, IndexLink } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

  import RunningTasks from './RunningTasks'
 import * as AuthActions from '../actions/AuthActions' 
import * as NotificationActions from '../actions/NotificationActions' 
import * as SupportSectionActions from '../actions/SupportSectionActions'
 import * as SupportPageActions from '../actions/SupportPageActions'

function resizeSideBar() {
    var running = $('#running-tasks');
    running.removeClass('bottom');
    var sidebar = $('#sidebar').height();
    var content = $('#sidebar .wrapper').height() + 40;
    if(content < sidebar) {
        running.addClass('bottom');
    }
}

class SideBar extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        $(document).ready(resizeSideBar);
        $(window).resize(resizeSideBar);
        if(this.props.Auth.isAuthenticated) {
            this.props.NotificationActions.getNotifications();
            setInterval(this.props.NotificationActions.getNotifications, 15000);
        }

        const { SupportActions } = this.props;
        SupportActions.listSupportSections();
    }

    isActive(routes, index_only=true) {
        var results = routes.map(route => {
            return this.context.router.isActive(route, index_only);
        });
        return results.indexOf(true) > -1?true:false;
    }

    getActiveClass(routes, index_only=true) {
        return this.isActive(routes, index_only)?'active':'';
    }

    render() {
        const { Auth, Notification, Support } = this.props;
        const messages = Notification.notifications?Notification.notifications.messages:0;
        const tasks = Notification.notifications?Notification.notifications.tasks:0;
        const requests = Notification.notifications?Notification.notifications.requests:0;

        return (
            <div id="sidebar" className="col-sm-3 col-md-2 sidebar">
                <div className="wrapper" onClick={resizeSideBar()}>
                    <ul className="nav nav-sidebar">
                        <li><Link to="/home" activeClassName="active"><i className="menu-icon tunga-icon-home"/> Home</Link></li>
                        {Auth.user.is_developer || Auth.user.is_staff?(<li><IndexLink to="/task" activeClassName="active"><i className="menu-icon tunga-icon-search"/> Find task</IndexLink></li>):null}
                        {Auth.user.is_project_owner || Auth.user.is_staff?(
                        <li className={this.getActiveClass(['/task/new', '/project/new'])}>
                            <a href="#" data-toggle="collapse" data-target="#dashboard-menu"><i className="menu-icon tunga-icon-work"/> Work </a>
                            <ul id="dashboard-menu" className="nav collapse in">
                                {Auth.user.is_project_owner || Auth.user.is_staff?(<li><Link to="/task/new" activeClassName="active">Post a new task</Link></li>):null}
                                {Auth.user.is_project_owner || Auth.user.is_staff?(<li><Link to="/project/new" activeClassName="active">Create a project</Link></li>):null}
                            </ul>
                        </li>
                            ):null}
                        <li><Link to="/channel" activeClassName="active"><i className="menu-icon tunga-icon-message"/> Messages {messages?<span className="badge">{messages}</span>:null}</Link></li>
                        <li className={this.getActiveClass(['/member'], false)}>
                            <a href="#" data-toggle="collapse" data-target="#tribe-menu"  className={this.isActive(['/member'], false)?"":"collapsed"}><i className="menu-icon tunga-icon-tribe"/> Tribe </a>
                            <ul id="tribe-menu" className={"nav "+ (this.isActive(['/member'], false)?"":"collapse in")}>
                                <li><Link to="/member/filter/developers" activeClassName="active">Coders</Link></li>
                                {Auth.user.is_developer|| Auth.user.is_staff?(<li><Link to="/member/filter/project-owners" activeClassName="active">Clients</Link></li>):null}
                                {Auth.user.is_project_owner || Auth.user.is_staff?(<li><Link to="/member/filter/relevant" activeClassName="active">Relevant to me</Link></li>):null}
                                <li><Link to="/member/filter/team" activeClassName="active">{Auth.user.is_developer?'My friends':'My team'}</Link></li>
                                {Auth.user.is_developer?(<li><Link to="/member/filter/my-project-owners" activeClassName="active">My clients</Link></li>):null}
                                <li><Link to="/member/filter/requests" activeClassName="active">Requests {requests?<span className="badge">{requests}</span>:null}</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/payments" activeClassName="active"><i className="menu-icon tunga-icon-wallet"/> Payments</Link></li>

                        {Support.Section.list.sections.length?(
                            <li className={this.getActiveClass(['/support'], false)}>
                                <a href="#" data-toggle="collapse" data-target="#support-menu" className={this.isActive(['/support'], false)?"":"collapsed"}><i className="menu-icon tunga-icon-support"/> Support </a>
                                <ul id="support-menu" className={"nav "+ (this.isActive(['/support'], false)?"":"collapse in")}>
                                    {Support.Section.list.sections.map(section => {
                                        return (
                                            <li key={section.id}><Link to={`/support/${section.slug}`} activeClassName="active">{section.title}</Link></li>
                                        );
                                    })}
                                </ul>
                            </li>
                        ):null}
                    </ul>

                    <RunningTasks onChange={resizeSideBar} num_tasks={tasks}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) { 
    return {Auth: state.Auth, Support: state.Support, Notification: state.Notification}; 
}

  function mapDispatchToProps(dispatch) { 
  return { 
      AuthActions: bindActionCreators(AuthActions, dispatch), 
      NotificationActions: bindActionCreators(NotificationActions, dispatch), 
      SupportActions: { 
          ...bindActionCreators(SupportSectionActions, dispatch), 
          ...bindActionCreators(SupportPageActions, dispatch) 
      } 
  } 
}

 export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
