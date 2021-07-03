/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  YesBtn,
  NoBtn,
  Select,
  Plead
} from '@components/styled-components/Task';
import Modal from './Modal';
import { options } from '../../assets/constants';

const DeleteReportModal = () => (
  <Modal
    title="Are you sure you want to delete this report and its history?"
    explanation={(
      <>
        If you delete the
        {' '}
        <strong>Executive metrics</strong>
        {' '}
        report, you will also delete the associated history:
      </>
    )}
    actionPanel={(
      <>
        <YesBtn onClick={(e) => { e.stopPropagation(); console.log('deleting all'); }}>Delete all</YesBtn>
        <NoBtn onClick={(e) => { e.stopPropagation(); console.log('canceling job'); }}>Cancel</NoBtn>
      </>
    )}
  >
    <Select multiple>
      {options.map((option, i) => <option key={i}>{option}</option>)}
    </Select>
    <Plead>
      Please type the word &lsquo;Delete&rsquo; to remove the
      {' '}
      <strong>Executive metrics</strong>
      {' '}
      report and its associated history:
    </Plead>
  </Modal>
);

export default DeleteReportModal;
