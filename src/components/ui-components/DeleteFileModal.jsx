import React from 'react';
import {
  Panel,
  ActionPanel,
  YesBtn,
  NoBtn
} from '@components/styled-components/Task';

const DeleteFileModal = () => (
  <Panel>
    <div>
      <h3>Are you sure you want to delete all of your files?</h3>
      <span>This action cannot be undone.</span>
    </div>
    <ActionPanel>
      <YesBtn onClick={(e) => { e.stopPropagation(); console.log('working yes'); }}>Yes</YesBtn>
      <NoBtn onClick={(e) => { e.stopPropagation(); console.log('working no'); }}>No</NoBtn>
    </ActionPanel>
  </Panel>
);

export default DeleteFileModal;
