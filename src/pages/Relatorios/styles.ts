import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  min-height: calc(100vh - 70px);

  .p-tabview {
    .p-tabview-nav {
      background: transparent;
      border: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .p-tabview-nav-link {
      background: ${({ theme }) => theme.colors.surface};
      border: 2px solid ${({ theme }) => theme.colors.border};
      border-radius: 10px;
      padding: 0.75rem 1.5rem;
      margin-right: 0.75rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: ${({ theme }) => theme.shadow};
    }

    .p-tabview-nav-link:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.shadowMd};
    }

    .p-tabview-nav-link.p-highlight {
      background: ${({ theme }) => theme.gradients.primary};
      border-color: transparent;
      color: white;
      box-shadow: ${({ theme }) => theme.shadowMd};
    }

    .p-tabview-panels {
      background: transparent;
      padding: 0;
      border: none;
    }

    .p-tabview-panel {
      background: transparent;
      padding: 0;
    }
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 0;

  .p-datatable {
    width: 100%;
    border-radius: 0;
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
