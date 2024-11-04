import React, { useContext } from 'react'
import { DeploymentContext } from '../context/DeploymentContext'

interface UnitDetailsProps {
  unit: string
}

const UnitDetails: React.FC<UnitDetailsProps> = ({ unit }) => {
  const deploymentContext = useContext(DeploymentContext)

  if (!deploymentContext) {
    return <div>Loading...</div>
  }

  const { units } = deploymentContext

  return (
    <div>
      <h3>{unit}</h3>
      <p>Status: {units[unit]}</p>
    </div>
  )
}

export default UnitDetails