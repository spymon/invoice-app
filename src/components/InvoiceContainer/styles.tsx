import styled from 'styled-components'
import { ItemWrapper } from '../helpers/ItemWrapper'

export const Wrapper = styled(ItemWrapper)`
  max-width: 730px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 72px;

  @media (max-width: 768px) {
    margin-top: 136px;
  }

  @media (max-width: 375px) {
    margin-top: 104px;
  }
`
