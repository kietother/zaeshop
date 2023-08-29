import * as React from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(
    document.getElementById('root') as HTMLElement
);

const customStyles: Modal.Styles = {
    overlay: {
        position: 'fixed',
        zIndex: 999999,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        border: 'none',
        background: 'rgba(0, 0, 0, 0.5)',
        right: 'auto',
        inset: '0px',
        width: '50rem',
        maxWidth: 'calc(100vw - 2rem)',
        maxHeight: 'calc(100vh - 2rem)',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.25)',
        overflowY: 'auto',
        position: 'relative',
        padding: '0px'
    }
};

type ModalCommonProps = {
    props: any;
    Component: React.FC<any>
};

const ModalCommon: React.FC<ModalCommonProps> = ({
    props: { modalIsOpen, openModal, closeModal, ...rest },
    Component
}) => {
    return (
        <Modal style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={false}>
            <Component {...rest} closeModal={closeModal} />
        </Modal>
    );
}

export default ModalCommon;