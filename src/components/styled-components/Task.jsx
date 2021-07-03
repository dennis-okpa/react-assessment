import styled from 'styled-components';

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
`;
export const Content = styled.div`
  text-align: justify;
`;
export const StyledList = styled.ol`
  text-align: justify;
  
  li {
    line-height: 2;
  }
`;
export const Heading = styled.h1`
  color: #216298;
`;
export const DesignList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Modal = styled.div`
  display: block;
  position: absolute;
  width: 500px;
  margin: 0 auto;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

  h3, span, button {
    font-family: sans-serif;
  }

  h3, span {
    width: 100%;
    display: block;
  }

  h3 {
    margin-top: 0;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border: 1px solid red;
  border-radius: 2%;
  width: 600px;
  height: 180px;
  text-align: left;
  padding: 30px;
  flex-flow: wrap;
  background: white;
`;

export const Overlay = styled.div`
  display: block;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  background: lightgrey;
  opacity: 0.2;
`;

export const DemoButton = styled.button`
  display: block;
  margin-top: 30px;
`;

export const ActionPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const ActionBtn = styled.button`
  padding: 10px 20px;
  color: blue;
  font-weight: bold;
  border-width: 0;
  border-radius: 2px;
`;

export const YesBtn = styled(ActionBtn)`
  margin-right: 10px;
  background: lightgrey;
`;

export const NoBtn = styled(ActionBtn)`
  border: 1px solid blue;
  background: white;
`;
