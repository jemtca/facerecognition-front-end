import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Sign Out</p>
			</div>
		);
	}
	else {
		return (
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
				<p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
			</div>
		);
	}
}

export default Navigation;
