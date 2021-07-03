import React from 'react';
import {
  YesBtn,
  NoBtn
} from '@components/styled-components/Task';
import Modal from './Modal';

const DeleteFileModal = () => (
  <Modal
    title="Are you sure you want to delete all of your files?"
    explanation="This action cannot be undone."
    actionPanel={(
      <>
        <YesBtn onClick={(e) => { e.stopPropagation(); console.log('yes sir'); }}>Yes</YesBtn>
        <NoBtn onClick={(e) => { e.stopPropagation(); console.log('no sir'); }}>No</NoBtn>
      </>
    )}
  />
);

export default DeleteFileModal;
