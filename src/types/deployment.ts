import { unitStatusEnum } from "./unitStatusEnum"
import { UnitsType } from "./unitsType"

export type DeploymentContextType = {
  units: UnitsType
  setUnitStatus: (unit: string, status: unitStatusEnum) => void
}
