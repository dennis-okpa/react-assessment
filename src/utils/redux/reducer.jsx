import React from 'react';
import { ACTION } from '../../assets/constants';
import DeleteFileModal from '../../components/ui-components/DeleteFileModal';
import DeleteReportModal from '../../components/ui-components/DeleteReportModal';

export const initialState = { modal: null };

export const modalSelection = (state, action) => {
  switch (action.type) {
    case ACTION.DATA_LOADER:
      return {
        modal: <img src="images/data_loading.png" alt="data loader" />
      };
    case ACTION.DELETE_FILE:
      return {
        modal: (
          <DeleteFileModal />
        )
      };
    case ACTION.DELETE_REPORT:
      return {
        modal: (
          <DeleteReportModal />
        )
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
