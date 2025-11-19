import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

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
`
