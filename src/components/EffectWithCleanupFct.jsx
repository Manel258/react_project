import React, { useEffect, useState } from 'react'

const EffectWithCleanupFct = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
   const interval = setInterval(() => {
    setCount((count)=>count+1)
  },1000);
    return () => clearInterval(interval)
  }, [])
  //le count est trop loin(2 blocs) donc de préférence on déclare localement
  return (
    <div>
      compteur:{count}
    </div>
  )
}

export default EffectWithCleanupFct
//nettoyage se fait au démontage du component pour éviter la surcharge de la mémoire
//[] -> effet s'éxecute une seule fois
//[params] -> s'éxecute après le changement de la dépendance
// pas de tab -> s'éxecute après chaque rendu
//Les effets: Appels API, manipulation dom,timer..etc