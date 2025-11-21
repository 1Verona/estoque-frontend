import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
  }

  input {
    width: 100%;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadowMd};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  .p-button-icon {
    margin-right: 0.5rem;
  }
`

export const StyledInput = styled(InputText)`
  width: 100%;
  height: 42px;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.borderLight};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`

export const StyledDialog = styled(Dialog)`
  .p-dialog-content {
    padding: 2rem !important;
    border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  }

  .p-dialog-header {
    padding: 1.5rem 2rem;
    border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
    background-color: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  .p-dialog {
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }
`

export const StyledDropdown = styled(Dropdown)`
  width: 100%;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: all 0.2s ease;

  .p-dropdown-label { 
    display: flex; 
    align-items: center; 
    padding: 0.3rem 0.8rem; 
  }
  
  .p-dropdown-trigger { 
    border-left: 1px solid ${({ theme }) => theme.colors.border}; 
    color: ${({ theme }) => theme.colors.textSecondary}; 
  }

  &:hover { 
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
  
  &:focus-within { 
    border-color: ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight}; 
  }

  .p-dropdown-panel {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadowMd};
    background-color: ${({ theme }) => theme.colors.surface};
    margin-top: .2rem;
    overflow: hidden;
    min-width: 100%;
  }

  .p-dropdown-items-wrapper { 
    max-height: 200px; 
    overflow-y: auto; 
  }
  
  .p-dropdown-item { 
    padding: .75rem 1rem; 
    transition: background-color .15s ease; 
  }
  
  .p-dropdown-item:hover { 
    background-color: ${({ theme }) => theme.colors.primaryLight}; 
  }
  
  .p-highlight { 
    background-color: ${({ theme }) => theme.colors.primary} !important; 
    color: #fff !important; 
  }
`

export const StyledToast = styled(Toast)`
  .p-toast {
    top: 80px;
    right: 20px;
    width: auto;
    max-width: 350px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadowMd};
  }

  .p-toast-message {
    border-radius: 8px;
    padding: 1rem;
    margin: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .p-toast-message-success {
    background-color: ${({ theme }) => theme.colors.successLight};
    color: ${({ theme }) => theme.colors.success};
    border-left: 4px solid ${({ theme }) => theme.colors.success};
  }

  .p-toast-message-error {
    background-color: ${({ theme }) => theme.colors.dangerLight};
    color: ${({ theme }) => theme.colors.danger};
    border-left: 4px solid ${({ theme }) => theme.colors.danger};
  }

  .p-toast-message-info {
    background-color: ${({ theme }) => theme.colors.infoLight};
    color: ${({ theme }) => theme.colors.info};
    border-left: 4px solid ${({ theme }) => theme.colors.info};
  }

  .p-toast-message-warning {
    background-color: ${({ theme }) => theme.colors.warningLight};
    color: ${({ theme }) => theme.colors.warning};
    border-left: 4px solid ${({ theme }) => theme.colors.warning};
  }

  .p-toast .p-toast-message .p-toast-message-icon {
    margin-right: 0.75rem;
  }
`;
