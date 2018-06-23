import React from 'react';
import PropTypes from "prop-types";

import IconButton from './IconButton';
import DocumentType from './DocumentType';
import DocumentForm from "./DocumentForm";

import {openModal} from './utils/modals';
import {addPropsToChildren} from './utils/children';
import Button from "./Button";
import Icon from "./Icon";

const ModalWrapper = (props) => {
    return (
        <div>
            {addPropsToChildren(props.children, {onChange: props.proceed, onSave: props.proceed})}
        </div>
    );
};

export default class Documents extends React.Component {

    static defaultProps = {
        variant: 'icon',
        type: 'file',

    };

    static propTypes = {
        variant: PropTypes.string,
        type: PropTypes.string,
        className: PropTypes.string,
        onChange: PropTypes.func,
        documentTypes: PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.state = {
            documents: [],
        };
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if(this.props.onChange && !_.isEqual(prevState.documents, this.state.documents)) {
            this.props.onChange(this.state.documents);
        }
    }

    onSelectType = () => {
        openModal(
            <ModalWrapper>
                <DocumentType/>
            </ModalWrapper>,
            'Type of document',
            true, {className: 'modal-upload'}
         ).then((type) => {
             this.onSelectDocument(type);
         });
    };

    onSelectDocument(type) {
        let self = this;
        openModal(
            <ModalWrapper>
                <DocumentForm type={type} documentTypes={this.props.documentTypes}/>
            </ModalWrapper>,
            'Add document',
            true, {className: 'modal-upload'}
        ).then((document) => {
            self.setState({documents: [...this.state.documents, document]});
        });
    }

    onRemoveDoc(idx) {
        this.setState({documents: [...this.state.documents.slice(0, idx), ...this.state.documents.slice(idx+1)]});
    }

    render() {
        return (
            <div className="document-input">
                {this.state.documents.length > 0?(
                    <div className="file-list">
                        {this.state.documents.map((doc, index) => {
                            return (
                                <div className="file-item" key={index}>
                                    <i className="tg-ic-file"/> {doc.title} {doc.file?doc.file.name:doc.url}
                                    <button className="btn" onClick={this.onRemoveDoc.bind(this, index)}><i className="tg-ic-close"/></button>
                                </div>
                            )
                        })}
                    </div>
                ):null}

                {this.props.variant === 'button'?(
                    <Button onClick={this.onSelectType}><Icon name="upload"/> Upload</Button>
                ):(
                    <IconButton name="add" onClick={this.onSelectType}/>
                )}
            </div>
        );
    }
}
