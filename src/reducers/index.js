import {routerReducer} from 'react-router-redux';
import Auth from './AuthReducers';
import Profile from './ProfileReducers';
import Project from './ProjectReducers';
import User from './UserReducers';
import Skill from './SkillReducers';
import Activity from './ActivityReducers';
import ProgressEvent from './ProgressEventReducers';
import Invoice from './InvoiceReducers';
import Utility from './UtilityReducers';
import SkillPage from './SkillPageReducers';

const TungaReducers = {
    Auth,
    Profile,
    Project,
    User,
    Skill,
    Activity,
    ProgressEvent,
    Invoice,
    Utility,
    SkillPage,
    routing: routerReducer,
};

export default TungaReducers;
