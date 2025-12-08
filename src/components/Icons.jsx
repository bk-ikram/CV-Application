import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiChevronRight, mdiCogs, mdiAccount, mdiSchool, mdiBriefcase } from '@mdi/js'

const navIconSize = 1.3;

function RightChevronIcon(){
    return (
         <Icon path={mdiChevronRight}
        size={1}
      />
    )
}

function LeftChevronIcon(){
    return (
         <Icon path={mdiChevronRight}
        size = {1}
        rotate={180}
        color = "white"
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


export {RightChevronIcon,LeftChevronIcon,PersonIcon,EducationIcon,SkillsIcon,ExperienceIcon};