import BsModal from 'react-bootstrap/Modal';

import { EventDef } from '@fullcalendar/core/internal';

type ViewEventModalProps = {
  show: boolean,
  handleClose: () => void,
  event: EventDef | null,
};

export const ViewEventModal = ({
  show,
  handleClose,
  event,
}: ViewEventModalProps) => (
  <BsModal
    show={show}
    onHide={handleClose}
    style={{
      display: 'flex',
    }}
  >
    <BsModal.Body>
      { event?.title }
    </BsModal.Body>
  </BsModal>
);
