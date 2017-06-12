import React from 'react';

import TaskContainer from '../containers/TaskContainer';
import TaskDetailContainer from '../containers/TaskDetailContainer';
import TaskForm from '../components/TaskForm';
import LandingPage from '../routes/LandingPage';

import {getEditToken} from '../utils/tasks';

export default class TaskWizard extends LandingPage {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Hire the best today!', subtitle: null, step: 1, pageClass: 'task-wizard-page lander'
        };
    }

    onStepChange(step, idx, all_steps) {
        this.setState({
            title: step && step.title?step.title:'',
            subtitle: step && step.subtitle?step.subtitle:null,
            step: idx?idx+1:-1
        });
    }

    getTaskId() {
        if(this.props.params) {
            return this.props.params.taskId;
        }
        return null;
    }

    getDLPTag() {
        const { location } = this.props;
        if(location && location.query.dlp_tag) {
            return location.query.dlp_tag;
        }
        return null;
    }

    getDLPDesc() {
        const { location } = this.props;
        if(location && location.query.dlp_desc) {
            return location.query.dlp_desc;
        }
        return null;
    }

    getDLPPhrase() {
        const tag = this.getDLPTag();
        const desc = this.getDLPDesc();
        if(tag || desc) {
            return `${this.getDLPTag() || 'software'} ${this.getDLPDesc() || 'developers'}`;
        }
        return null;
    }

    renderHeaderContent() {
        const {options} = this.props;
        const dlp_phrase = this.getDLPPhrase();
        const dlp_tag = this.getDLPTag();
        const dlp_desc = this.getDLPDesc();

        return (
            <div className="row">
                <div className="col-sm-6 col-md-8">
                    <div className="pitch">
                        <h1>
                            Software outsourcing<br/>
                            done right.
                        </h1>
                        <h3>
                            Flexible access to top African {this.getDLPTag() || 'software'} {dlp_desc?dlp_desc.toLowerCase():'developers'}.
                        </h3>
                        <p className="details">
                            <div><i className="fa fa-circle"/> Verified skills matching</div>
                            <div><i className="fa fa-circle"/> Easy communication</div>
                            <div><i className="fa fa-circle"/> Impact sourcing</div>
                            <div><i className="fa fa-circle"/> Quality monitoring</div>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="task-wizard">
                        <div className="task-section">
                            <h2 className="title">Hire the best today!</h2>
                            <TaskContainer>
                                <TaskDetailContainer taskId={this.getTaskId()} editToken={getEditToken()}>
                                    <TaskForm showSectionHeader={false}
                                              options={options}
                                              onStepChange={this.onStepChange.bind(this)}
                                              urlPrefix="welcome"/>
                                </TaskDetailContainer>
                            </TaskContainer>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
