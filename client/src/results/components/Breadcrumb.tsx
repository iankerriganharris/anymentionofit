import React from 'react'
import { LogoSwitch } from '../../common/components'

export default ({ topicName, frequencyName }: any) => (
  <span>
    <LogoSwitch company={frequencyName} /> {topicName}
  </span>
)
