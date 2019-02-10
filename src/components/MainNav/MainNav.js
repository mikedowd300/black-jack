import React from 'react';
import './MainNav.scss';
import { routes } from './../../utilities/routes';

const MainNav = props => {

  const links = routes.map(route =>
    <li
      key={route.page}
      onClick={() => props.changePage(route.pageName)}
    >{route.page}</li>
  );

  return (
    <ul className="home-nav">
      { links }
    </ul>
  )
}

export default MainNav;
