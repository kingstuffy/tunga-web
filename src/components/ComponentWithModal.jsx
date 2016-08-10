import React from 'react';
import LargeModal from './ModalLarge';

export default class ComponentWithModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false, modalContent: null, modalTitle: ''};
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }
}
