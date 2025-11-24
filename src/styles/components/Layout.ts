import styled from 'styled-components'
import { Button } from 'primereact/button'

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
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

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 122, 217, 0.3);
  }

  .p-button-icon {
    margin-right: 0.6rem;
  }
`
