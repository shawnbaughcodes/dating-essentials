import React from 'react'
import Icon from '../components/Icon'
import './styles.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
interface MenuProps extends RouteComponentProps {
}

const Menu = ({ history }: MenuProps) => {
  return (
    <div className="menu-wrapper">
      <div onClick={() => history.push('/')}>
        <Icon className="menu-icon" iconName="home" />
      </div>
      <div onClick={() => history.push("matches")}>
        <Icon className="menu-icon" iconName="likes" />
      </div>
      <div onClick={() => history.push("chat")}>
        <Icon className="menu-icon" iconName="chat" />
      </div>
      <div onClick={() => history.push("profile")}>
        <Icon className="menu-icon" iconName="default-profile" />
      </div>
    </div>
  )
}

export default withRouter(Menu);