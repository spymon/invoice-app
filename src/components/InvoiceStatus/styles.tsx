import styled from 'styled-components'
import { Status } from '../../types/types'
import { headingThree } from '../helpers/FontComponents/styles'

interface Props {
  status: Status
}

const pickColor = (props: any) => {
  switch (props.status) {
    case 'paid':
      return props.theme.designSystem.colors.green
    case 'pending':
      return props.theme.designSystem.colors.orange
    case 'draft':
      return props.theme.grayBlue_fadedLightBlue
    default:
      return ''
  }
}

export const StatusBlock = styled.div<Props>`
  position: relative;
  width: 104px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    opacity: 0.0571;
    background-color: ${props => pickColor(props)};
  }
`

export const StatusDot = styled.div<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${props => pickColor(props)};
`

export const StatusText = styled.h3<Props>`
  ${headingThree};
  color: ${props => pickColor(props)};
`
