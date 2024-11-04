import React, { useContext } from 'react'
import { DeploymentProvider, DeploymentContext } from './context/DeploymentContext'
import MissionCompleted from './components/MissionCompleted'
import UnitList from './components/UnitList'
import UnitStatus from './components/UnitStatus'
import { unitStatusEnum } from './types/unitStatusEnum'

const App: React.FC = () => {
  return (
    <DeploymentProvider>
      <DeploymentConsumer />
    </DeploymentProvider>
  )
}

const DeploymentConsumer: React.FC = () => {
  const deploymentContext = useContext(DeploymentContext)

  if (!deploymentContext) {
    return <div>Loading...</div>
  }

  const {units, setUnitStatus } = deploymentContext

  const resetUnits = () => {
    Object.keys(units).forEach(unit => setUnitStatus(unit,unitStatusEnum.Idle ))
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>
        מעקב פריסת יחידות צה"ל
      </h1>
      <MissionCompleted />
      <UnitStatus />
      <UnitList />
      <button onClick={resetUnits} style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
        רענן יחידות
      </button>
    </div>
  )
}

export default App