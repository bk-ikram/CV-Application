import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'

function RightChevron(){
    return (
         <Icon path={mdiChevronRight}
        size={1}
      />
    )
}

function LeftChevron(){
    return (
         <Icon path={mdiChevronRight}
        size={1}
        rotate={180}
        color = "green"
      />
    )
}

export {RightChevron,LeftChevron};