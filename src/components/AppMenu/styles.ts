import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.gradients.primary};
  box-shadow: ${({ theme }) => theme.shadowMd};

  .p-menubar {
    border: none;
    border-radius: 0;
    background: transparent;
    padding: 1rem 2rem;
  }

  .p-menubar-root-list {
    gap: 0.75rem;
    display: flex;
    align-items: center;
  }

  .p-menuitem-link {
    border-radius: 8px;
    padding: 0.75rem 1.25rem;
    transition: all 0.2s ease;
    color: white !important;
  }

  .p-menuitem-link.p-menuitem-link-active {
    font-weight: 600;
  }

  .p-menuitem-text {
    font-weight: 500;
    color: white !important;
  }

  .p-menuitem-icon {
    margin-right: 0.5rem;
    color: white !important;
  }

  .p-menubar-end {
    margin-left: auto;
  }
`
