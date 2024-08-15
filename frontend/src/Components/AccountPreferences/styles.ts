import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: ${(props) => props.theme.colors.background[1]};
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.accessibleText[12]};
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.accessibleText[12]};
`;

export const Section = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.accessibleText[12]};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.separators[6]};
  background: ${(props) => props.theme.colors.background[2]};
  color: ${(props) => props.theme.colors.accessibleText[12]};
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SaveButton = styled.button`
  background: ${(props) => props.theme.colors.interactive[5]};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.accessibleText[12]};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.interactive[4]};
  }
`;

export const DeleteButton = styled.button`
  background: ${(props) => props.theme.colors.interactive[5]};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.accessibleText[12]};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.interactive[4]};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.accessibleText[12]};
  font-size: 18px;
  cursor: pointer;
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.colors.interactive[5]};
  font-size: 12px;
`;
