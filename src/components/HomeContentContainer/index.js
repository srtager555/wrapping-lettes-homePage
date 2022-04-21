import React, { useState, useEffect } from 'react'

import { HomeContentCode } from '@Components/HomeContentCode'
import { HomeContentItem } from '@Components/HomeContentItem'

import "@Styles/HomeContent.css"

export function HomeContentContainer({ component, code, color}) {
    // aqui tiene que hacerse una llamada a la api de object intersection con el div HomeContentContainer
    // cuando sea observado se cambiara el color del fondo del body con un className
    // color es para saber cual es el color de fondo, la asignacion desde home desidira que colo se usara. 
  return (
    <div className='HomeContentContainer--main'>
        <div className='HomeContentContainer--main__content'>
            <HomeContentItem title={component[0]} description={component[1]} />
            <HomeContentCode code={code} />
        </div>
    </div>
  )
}
