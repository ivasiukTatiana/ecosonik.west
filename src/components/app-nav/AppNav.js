import React from 'react';
import {Link} from 'react-router-dom';

import './AppNav.css';

export default function AppNav(props) {
  const links = props.links.map((link, index) => {
    const route = "/"+props.routes[index];
    return (
      <Link key={index} to={route} className="Link">{link}</Link>
    )
  });
  return(
    <nav>{links}</nav>
  )
}
