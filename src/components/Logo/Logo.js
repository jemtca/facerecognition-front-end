import React from 'react';
import Tilt from 'react-tilt';
import brain_logo from './brain_logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop: '5px'}} src={brain_logo} alt='logo' />
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
