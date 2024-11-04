// utils/statusUtils.ts
import { unitStatusEnum } from '../types/unitStatusEnum'

export const getStatusClass = (status: string) => {
  switch (status) {
    case unitStatusEnum.Idle:
      return 'unit-idle'
    case unitStatusEnum.Active:
      return 'unit-active'
    case unitStatusEnum.Completed:
      return 'unit-completed'
    default:
      return ''
  }
}