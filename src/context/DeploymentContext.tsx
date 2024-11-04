import { createContext, useState } from "react"
import { DeploymentContextType } from "../types/deployment"
import { unitStatusEnum } from "../types/unitStatusEnum"

const DeploymentContext = createContext<DeploymentContextType | undefined>(
  undefined
)
const DeploymentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // הגדרת מצב התחלתי
  const [units, setUnits] = useState({
    Golani: "Idle",
    Paratroopers: "Idle",
    Givati: "Idle",
    NavySeals: "Idle",
    Artillery: "Idle"
  })
  // פונקציה לשינוי מצב היחידות
  const setUnitStatus = (unit: string, status: unitStatusEnum) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [unit]: status,
    }))
  }
  return (
    <DeploymentContext.Provider value={{ units, setUnitStatus }}>
      {children}
    </DeploymentContext.Provider>
  )
}
export { DeploymentContext, DeploymentProvider }
