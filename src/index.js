import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from './components/Badge/Badge';
import AvatarImg from './images/avatar.png';

ReactDOM.render(<Badge firstName='YAMid' lastName='Vélez Muñoz' jobTitle='Developer Web' avatarUrl={AvatarImg} twitter='yavemu' />, document.getElementById('app'));
