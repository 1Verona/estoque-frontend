
import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 10px; 
`;

export const StyledDialog = styled(Dialog)`
  .p-dialog-content {
    padding: 2rem;
    padding-top: 0;
    border-radius: 0 0 12px 12px;
  }

  .p-dialog-header {
    padding: 1.5rem 2rem;
    border-radius: 12px 12px 0 0;
    background-color: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  .p-dialog {
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadowLg};
  }

  .p-dialog-footer {
    padding: 1rem 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${props => (props.severity === 'danger' ? props.theme.colors.danger : props.theme.colors.primary)};
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease;
  gap: 5px;

  &:hover {
    background-color: ${props => (props.severity === 'danger' ? '#d32f2f' : props.theme.colors.primaryHover)};
    transform: translateY(-1px);
  }
  
  &.p-button-text {
      background-color: transparent !important;
      color: ${({ theme }) => theme.colors.textSecondary} !important;
      border: none;
      box-shadow: none;
  }
`;

export const DeleteMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0; 
  
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  
  p {
    margin: 0;
  }
  
  .warning-text {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.danger};
    margin-top: 10px;
  }
`;