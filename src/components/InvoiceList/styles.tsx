import styled from 'styled-components'

export const InvoiceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 100%;
  margin-top: 65px;

  @media (max-width: 810px) {
    margin-top: 56px;
  }

  @media (max-width: 550px) {
    margin-top: 32px;
  }
`
