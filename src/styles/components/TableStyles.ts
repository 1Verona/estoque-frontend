import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 25px;

  .p-datatable {
    width: 100%;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
  }

  .p-datatable-thead > tr > th {
    background-color: ${({ theme }) => theme.colors.tableHeader};
    color: ${({ theme }) => theme.colors.tableText};
    font-weight: 600;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.95rem;
  }

  .p-datatable-tbody > tr > td {
    padding: 0.85rem 1rem;
    font-size: 0.95rem;
    color: #4b5563;
    border-color: #f1f5f9;
  }

  .p-datatable-tbody > tr:hover {
    background-color: ${({ theme }) => theme.colors.tableHover};
    transition: 0.2s ease;
    cursor: pointer;
  }

  .p-paginator {
    border: none;
    padding: 1rem 0;
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  .p-button-rounded.p-button-text {
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  .p-button-info {
    color: ${({ theme }) => theme.colors.info};
  }

  .p-button-danger {
    color: ${({ theme }) => theme.colors.danger};
  }

  .p-button-text:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
