/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';

import BsModal from 'react-bootstrap/Modal'; import BsForm from 'react-bootstrap/Form';
import BsRow from 'react-bootstrap/Row';
import BsCol from 'react-bootstrap/Col';
import BsButton from 'react-bootstrap/Button';

import { Controller, useForm } from 'react-hook-form';

import DateTimePicker from 'react-datetime-picker';

import { useEventDateStore, EventState } from '../../../../hooks/useEventDateStore';

type ModalProps = {
  show: boolean,
  handleClose: () => void,
};

interface EventInputs extends EventState {
  title: string,
  allDay: boolean,
  description?: string
}

export const Modal = ({
  show,
  handleClose,
}: ModalProps) => {
  const eventStartDate = useEventDateStore((state) => state.eventStartDate);
  const eventEndDate = useEventDateStore((state) => state.eventEndDate);

  const {
    control, handleSubmit, register, reset,
  } = useForm<EventInputs>({
    defaultValues: {
      title: '',
      eventStartDate,
      eventEndDate,
      allDay: false,
      description: '',
    },
  });

  // reset the date default values since these are
  // dynamically changing
  useEffect(() => {
    reset({
      eventEndDate,
      eventStartDate,
    });
  }, [eventEndDate, eventStartDate]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <BsModal
      show={show}
      onHide={handleClose}
      style={{
        display: 'flex',
      }}
    >
      <form onSubmit={onSubmit}>
        <BsModal.Body>
          <BsRow className="mb-3">
            <BsCol>
              <BsForm.Control
                size="lg"
                type="text"
                placeholder="Add Event Title"
                id="eventPassword"
                aria-describedby="passwordHelpBlock"
                {...register('title')}
              />
            </BsCol>
          </BsRow>
          <BsRow className="mb-3">
            <BsCol xs={3}>
              <p>From</p>
            </BsCol>
            <BsCol>
              <Controller
                control={control}
                name="eventStartDate"
                render={({ field }) => (
                  <DateTimePicker
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </BsCol>
          </BsRow>
          <BsRow className="mb-3">
            <BsCol xs={3}>
              <p>To</p>
            </BsCol>
            <BsCol>
              <Controller
                control={control}
                name="eventEndDate"
                render={({ field }) => (
                  <DateTimePicker
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </BsCol>
          </BsRow>
          <BsRow className="mb-3">
            <BsCol>
              <BsForm.Check
                type="checkbox"
                id="allDay"
                label="All Day"
                {...register('allDay')}
              />
            </BsCol>
          </BsRow>
          <BsRow className="mb-3">
            <BsCol>
              <BsForm.Control
                as="textarea"
                placeholder="Add Event Description"
                rows={3}
                {...register('description')}
              />
            </BsCol>
          </BsRow>
          <BsButton variant="primary" type="submit">
            Submit
          </BsButton>
          <BsButton
            variant="secondary"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </BsButton>
        </BsModal.Body>
      </form>
    </BsModal>
  );
};
