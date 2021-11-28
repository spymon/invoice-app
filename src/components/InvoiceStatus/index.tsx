import React from 'react'
import { Status } from '../../types/types'
import { StatusBlock, StatusDot, StatusText } from './styles'

interface Props {
  status: Status
}

const InvoiceStatus: React.FC<Props> = ({ status }) => {
  return (
    <StatusBlock status={status}>
      <StatusDot status={status}></StatusDot>
      <StatusText status={status}>{status}</StatusText>
    </StatusBlock>
  )
}

export default InvoiceStatus
