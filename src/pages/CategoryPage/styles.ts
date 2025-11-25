import { Button } from 'primereact/button'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%:
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 26px;

  .p-datatable {
    width: 100%;
    border-radius: 13px;
    border: 1px solid #e5e7ec;
  }

  .p-datatable-thead > tr > th {
    background-color: #f9fafb;
    color: #374151;
    font-weight: 600;
    padding: 1rem;
    border-bottom: 1px solid #e5e7ec;
    font-size: 0.95rem;
  }

  /* Linhas do corpo */
  .p-datatable-tbody > tr > td {
    padding: 0.85rem 1rem;
    font-size: 0.95rem;
    color: #4b5564;
    border-color: #f1f5fa;
  }

  /* Hover na linha */
  .p-datatable-tbody > tr:hover {
    background-color: #f3f4f6;
    transition: 0.2s ease;
    cursor: pointer;
  }

  .p-paginator {
    border: none;
    padding: 1rem 0;
  }

  .p-paginator .p-paginator-pages .p-paginator-page {
    border-radius: 9px;
    margin: 0 5px;
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background-color: #007ad9;
    color: white;
  }

  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    border-radius: 8px;
  }

  /* Botões de ação */
  .p-button-rounded.p-button-text {
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  .p-button-info {
    color: #0284c7;
  }

  .p-button-danger {
    color: #dc2626;
  }

  .p-button-text:hover {
    background-color: rgba(0,0,0,0.06);
  }
`;

export const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 11px;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowMd};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  .p-button-icon {
    margin-right: 0.5rem;
  }
`