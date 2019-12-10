import React from 'react';
import {Link} from 'react-router-dom';

export default function AppNav(props) {
  const links = props.routes.map((item, index) => {
    const route = item;
    const link = props.links.filter((item) => {
      return item.hasOwnProperty(route)
    }).map((item) => { return item[route] });

    return (
      <Link key={index} to={`/${route}`} className="Link">{link}</Link>
    )
  });
  return(
    <React.Fragment>{links}</React.Fragment>
  )
}
