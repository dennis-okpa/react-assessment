import React from 'react';
import { ACTION } from '../../assets/constants';
import DeleteFileModal from '../../components/ui-components/DeleteFileModal';

export const initialState = { modal: null };

export const reducer = (state, action) => {
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
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
