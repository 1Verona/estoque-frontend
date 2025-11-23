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

  /* Hamburger menu button */
  .p-menubar-button {
    color: white !important;
    background: transparent !important;
    border: none !important;
  }

  .p-menubar-button:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }

  /* Mobile menu overlay - fix white background */
  .p-menubar-root-list {
    background: transparent !important;
  }

  /* Mobile menu items in overlay */
  @media screen and (max-width: 960px) {
    .p-menubar-root-list {
      background: ${({ theme }) => theme.gradients.primary} !important;
      border: none !important;
      padding: 1rem !important;
    }

    .p-menuitem {
      background: transparent !important;
    }

    .p-menuitem-content {
      background: transparent !important;
    }

    .p-menuitem-link {
      color: white !important;
      background: transparent !important;
    }

    .p-menuitem-link:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }

    .p-menuitem-text {
      color: white !important;
    }

    .p-menuitem-icon {
      color: white !important;
    }
  }
`
