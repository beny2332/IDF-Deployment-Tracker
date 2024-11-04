import React, { useContext } from 'react'
import { DeploymentContext } from '../context/DeploymentContext'

const MissionCompleted: React.FC = () => {
  const deploymentContext = useContext(DeploymentContext)

  if (!deploymentContext) {
    return <div>Loading...</div>
  }

  const { units } = deploymentContext
  const allCompleted = Object.values(units).every(status => status === 'Completed')

  return (
    <div className='allCompletedMessage'>
      {allCompleted ? <h2>All units have completed their missions!</h2> : null}
    </div>
  )
}

export default MissionCompleted