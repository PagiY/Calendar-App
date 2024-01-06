/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';

import BsModal from 'react-bootstrap/Modal'; import BsForm from 'react-bootstrap/Form';
import BsRow from 'react-bootstrap/Row';
import BsCol from 'react-bootstrap/Col';
import BsButton from 'react-bootstrap/Button';

import { AxiosResponse } from 'axios';

import { Controller, useForm } from 'react-hook-form';

import { UseMutationResult } from '@tanstack/react-query';

import DateTimePicker from 'react-datetime-picker';

import { useEventDateStore } from '../../hooks/useEventDateStore';

import { EventData } from '../../types';

type ModalProps = {
  show: boolean,
  handleClose: () => void,
  createEvent: UseMutationResult<AxiosResponse<any, any>, Error, EventData, unknown>
};

export const Modal = ({
  show,
  handleClose,
  createEvent,
}: ModalProps) => {
  const eventStartDate = useEventDateStore((state) => state.start);
  const eventEndDate = useEventDateStore((state) => state.end);

  const {
    control, handleSubmit, register, reset,
  } = useForm<EventData>({
    defaultValues: {
      title: '',
      start: eventStartDate,
      end: eventEndDate,
      allDay: false,
      description: '',
    },
  });

  // reset the date default values since these are
  // dynamically changing
  useEffect(() => {
    reset({
      title: '',
      description: '',
      allDay: false,
      start: eventStartDate,
      end: eventEndDate,
    });
  }, [eventEndDate, eventStartDate]);

  const onSubmit = handleSubmit((data) => {
    createEvent.mutate(data);
    handleClose();
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
                id="title"
                aria-describedby="eventTitle"
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
                name="start"
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
                name="end"
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
