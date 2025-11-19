import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow-x: hidden;
  box-sizing: border-box;

  .p-tabview {
    .p-tabview-nav {
      display: flex;
      gap: 0.75rem;
      padding: 0.6rem;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
      align-items: center;
    }

    .p-tabview-nav-link {
      padding: 0.7rem 1.1rem;
      font-size: 1.05rem;
      border-radius: 8px;
      margin: 0;
      color: ${({ theme }) => theme.colors.text};
      background: #fff;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      transition: all 0.12s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid rgba(0,0,0,0.04);
    }

    .p-tabview-nav-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }

    .p-tabview-nav-link.p-highlight {
      background: #fff;
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    .p-tabview-nav-link:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 122, 217, 0.12);
    }

    .p-tabview-panel {
      padding: 1rem 0 0 0;
      background: transparent;
    }

    .p-tabview-panels,
    .p-tabview-panel {
      background: transparent !important;
      border-top: none !important;
      margin-top: 0 !important;
      padding-top: 0 !important;
    }

    .p-tabview-nav {
      margin-bottom: 0;
    }
  }
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



