import React from 'react'
import { IconContext, IconType } from 'react-icons'
import { IoLogoReddit, IoLogoTwitter, IoLogoRss } from 'react-icons/io'

interface IProps {
  company: string
  size?: string
}

interface ILogos {
  [key: string]: any
}

const logos: ILogos = {
  reddit: <IoLogoReddit />,
  twitter: <IoLogoTwitter />
}

const getLogo = (company: string) => {
  const lookup = logos[company.toLowerCase()]
  return lookup ? lookup : <IoLogoRss />
}

const getSize = (size: string | undefined) => (size ? size : '1em')

export default (props: IProps) => (
  <IconContext.Provider value={{ size: getSize(props.size) }}>{getLogo(props.company)}</IconContext.Provider>
)
