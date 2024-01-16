'use client'

import { useAppStates } from '@/contexts/AppStates'
import  { ReactNode, useEffect } from 'react'

const SetRight = ({content, navPosition, dependency}: {content: string | ReactNode, navPosition: 'right' | 'left' | 'center', dependency?: any}) => {

    const {setNavContent, navContent} = useAppStates()

    useEffect(() => {
        switch (navPosition) {
            case "right":
                setNavContent({...navContent, right: content})
              
              break;
            case "left":
            
            setNavContent({...navContent, left: content})
              break;
            case "center":
            
            setNavContent({...navContent, center: content})
              break;
            default:
              break;
          }
    }, [dependency])
    
  return null
}

export default SetRight
