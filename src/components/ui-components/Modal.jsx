import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  ActionPanel,
} from '@components/styled-components/Task';

const Modal = ({
  title, explanation, actionPanel, children
}) => (
  <Panel>
    <div>
      <h3>{title}</h3>
      <hr />
      <span>{explanation}</span>
    </div>
    {children}
    <ActionPanel>{actionPanel}</ActionPanel>
  </Panel>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.node.isRequired,
  actionPanel: PropTypes.node.isRequired,
  children: PropTypes.node
};

Modal.defaultProps = {
  children: null
};

export default Modal;
