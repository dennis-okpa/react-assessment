import React, { useReducer } from 'react';
import {
  Content,
  Heading,
  Task,
  Modal,
  Overlay,
  DemoButton,
} from '@components/styled-components/Task';
import { modalSelection, initialState } from '../../utils/redux/reducer';
import { ACTION } from '../../assets/constants';

const DemoPage = () => {
  const [state, dispatch] = useReducer(modalSelection, initialState);

  return (
    <Task>
      <Heading>Demo Page</Heading>
      <Content>
        <DemoButton type="button" onClick={() => dispatch({ type: ACTION.DATA_LOADER })}>Data loading modal</DemoButton>
        <DemoButton type="button" onClick={() => dispatch({ type: ACTION.DELETE_FILE })}>Delete file modal</DemoButton>
        <DemoButton type="button" onClick={() => dispatch({ type: ACTION.DELETE_REPORT })}>Delete report modal</DemoButton>
      </Content>
      {state.modal && (
        <>
          <Modal>{state.modal}</Modal>
          <Overlay onClick={() => dispatch({ type: 'reset' })} />
        </>
      )}
    </Task>
  );
};

export default DemoPage;
