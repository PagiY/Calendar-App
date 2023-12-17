import BsModal from 'react-bootstrap/Modal';

type ModalProps = {
  show: boolean,
};

export const Modal = ({
  show,
}: ModalProps) => (
  <BsModal show={show}>
    <form>
      <BsModal.Header closeButton>
        <BsModal.Title>Modal heading</BsModal.Title>
      </BsModal.Header>
    </form>
  </BsModal>
);
