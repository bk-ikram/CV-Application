import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiChevronRight, mdiCogs, mdiAccount, mdiSchool, mdiBriefcase, mdiTrashCan, mdiPlus } from '@mdi/js'

const navIconSize = 1.3;
const sectionMgmtSize = 0.8;

function RightChevronIcon({color="white", size = 1}){
    return (
         <Icon path={mdiChevronRight}
        size={size}
      />
    )
}

function LeftChevronIcon({color="white", size = 1}){
    return (
         <Icon path={mdiChevronRight}
        size = {size}
        rotate={180}
      />
    )
}

function PersonIcon(){
  return (
      <Icon path={mdiAccount} 
      size={navIconSize} 
      />
    )
}

function EducationIcon(){
  return (
      <Icon path={mdiSchool} 
      size={navIconSize} 
      />
    )
}

function SkillsIcon(){
  return (
      <Icon path={mdiCogs} 
      size={navIconSize} 
      />
    )
}

function ExperienceIcon(){
  return (
      <Icon path={mdiBriefcase} 
      size={navIconSize} 
      />
    )
}

function TrashIcon({color ="white"}){
  return (
    <Icon path={mdiTrashCan}
    size={sectionMgmtSize}
    color= {color}
    />
  )
}
function PlusIcon({color ="white", size={sectionMgmtSize}}){
  return (
    <Icon path={mdiPlus}
    size= {size}
    color= {color}
    />
  )
}
export {RightChevronIcon,LeftChevronIcon,PersonIcon,EducationIcon,SkillsIcon,ExperienceIcon,TrashIcon, PlusIcon};