/** @jsxImportSource @emotion/react */
import { ModalStyle } from "./ModalStyle"

const Modal = ({ children, modalOpen, handleModal }) => {
    return (
        <div id="modal" css={modalOpen ? [ModalStyle.modalWindow, ModalStyle.modalShow] : [ModalStyle.modalWindow, ModalStyle.modalClose]}>
            <div css={ModalStyle.modalContent}>
                <span css={ModalStyle.close} onClick={() => handleModal()}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal