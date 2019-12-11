import React from 'react';
import ChoiceGroup from '../../core/ChoiceGroup';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Button from '../../core/Button';

class SelectDaysModal extends React.Component {
    state = {
        modal: false,
        daysOfTheWeek: [
            { name: 'Monday', updateEnabled: null },
            { name: 'Tuesday', updateEnabled: null },
            { name: 'Wednesday', updateEnabled: null },
            { name: 'Thursday', updateEnabled: null },
            { name: 'Friday', updateEnabled: null },
        ],
    };

    handleModalToggle = () => {
        const { modal } = this.state;
        this.setState({ modal: !modal });
    };

    handleSubmittingDaysSelection = participation => {
        const { ProjectActions } = this.props;
        const { daysOfTheWeek } = this.state;
        let updateDays = JSON.parse('[' + participation.update_days + ']');

        for (let i = 0; i < daysOfTheWeek.length; i++) {
            if (daysOfTheWeek[i].updateEnabled === true && !updateDays.includes(i)) {
                updateDays.push(i);
            }
            if (daysOfTheWeek[i].updateEnabled === false && updateDays.includes(i)) {
                updateDays.splice(updateDays.indexOf(i), 1);
            }
        }
        ProjectActions.updateParticipation(participation.id, {
            day_selection_for_updates: true,
            update_days: updateDays.toString(),
        });
    };

    handleToggleDayUpdate = (selectedDay, choice) => {
        this.setState(state => {
            const daysOfTheWeek = state.daysOfTheWeek.map(day => {
                day.name === selectedDay.name ? (day.updateEnabled = choice) : day;
                return day;
            });
            return {
                ...state,
                daysOfTheWeek,
            };
        });
    };

    render() {
        const { modal, daysOfTheWeek } = this.state;
        const { participation } = this.props;
        return (
            <div className="select-days-btn-container">
                <Button onClick={this.handleModalToggle}>Select Days</Button>
                <Modal
                    isOpen={modal}
                    toggle={this.handleModalToggle}
                    onClosed={this.handleSubmittingDaysSelection.bind(this, participation)}
                >
                    <ModalHeader toggle={this.handleModalToggle}>Select Days</ModalHeader>
                    <ModalBody>
                        {daysOfTheWeek.map((day, index) => {
                            let selectedDays = JSON.parse('[' + participation.update_days + ']');
                            let isSelectedDay = selectedDays.includes(index);
                            return (
                                <div key={day.name} className="days-selection">
                                    {day.name}
                                    <ChoiceGroup
                                        choices={[[true, 'on'], [false, 'off']]}
                                        selected={isSelectedDay}
                                        onChange={this.handleToggleDayUpdate.bind(this, day)}
                                    />
                                </div>
                            );
                        })}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SelectDaysModal;
