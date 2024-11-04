import React, { useContext } from "react"
import { DeploymentContext } from "../context/DeploymentContext"
import { getStatusClass } from "../utils/statusUtils"

const UnitStatus: React.FC = () => {
  const deploymentContext = useContext(DeploymentContext)

  if (!deploymentContext) {
    return <div>Loading...</div>
  }
  const { units } = deploymentContext

  return    <div>
  <h2>Units Status</h2>
  <ul>
    {Object.keys(units).map((unit) => (
      <li key={unit} className={getStatusClass(units[unit])}>
        {unit}: {units[unit]}
      </li>
    ))}
  </ul>
</div>

}

export default UnitStatus
