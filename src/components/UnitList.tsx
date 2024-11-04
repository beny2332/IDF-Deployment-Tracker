import React, { useContext } from 'react'
import { DeploymentContext } from '../context/DeploymentContext'
import ChangeStatus from './ChangeStatus'
import { getStatusClass } from '../utils/statusUtils'

const UnitList: React.FC = () => {
  const deploymentContext = useContext(DeploymentContext)

  if (!deploymentContext) {
    return <div>Loading...</div>
  }
  const { units } = deploymentContext

  return (
    <div>
      <h2>Units List</h2>
      <ul>
        {Object.keys(units).map((unit) => (
          <li key={unit} className={getStatusClass(units[unit])}>
            <ChangeStatus unit={unit} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UnitList