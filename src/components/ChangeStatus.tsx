import React, { useContext } from "react"
import { DeploymentContext } from "../context/DeploymentContext"
import { unitStatusEnum } from "../types/unitStatusEnum"

interface ChangeStatusProps {
  unit: string
}

const ChangeStatus: React.FC<ChangeStatusProps> = ({ unit }) => {
  const deploymentContext = useContext(DeploymentContext)

  if (!deploymentContext) {
    return <div>Loading...</div>
  }

  const { units, setUnitStatus } = deploymentContext

  const cycleStatus = (currentStatus: string) => {
    const statuses = Object.values(unitStatusEnum)
    const currentIndex = statuses.indexOf(currentStatus as unitStatusEnum)
    const nextIndex = (currentIndex + 1) % statuses.length
    return statuses[nextIndex]
  }

  const handleStatusChange = () => {
    const newStatus = cycleStatus(units[unit])
    setUnitStatus(unit, newStatus)
  }

  return (
    <div>
      <span >
        {unit}
      </span>
      <button onClick={handleStatusChange}>Change Status</button>
    </div>
  )
}

export default ChangeStatus
