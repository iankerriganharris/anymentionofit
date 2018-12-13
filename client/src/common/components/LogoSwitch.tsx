import React from 'react'
import { IconContext, IconType } from 'react-icons'
import { IoLogoReddit, IoLogoTwitter, IoLogoRss } from 'react-icons/io'

interface IProps {
  company: string
  size?: string
  color?: string
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

const getColor = (color: string | undefined) => (color ? color : 'black')

export default (props: IProps) =>
  props.company ? (
    <IconContext.Provider value={{ size: getSize(props.size), color: getColor(props.color) }}>
      {getLogo(props.company)}
    </IconContext.Provider>
  ) : null
