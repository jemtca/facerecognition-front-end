import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
		<div className='center'>
			{
				imageUrl
				? (
					boxes.length
					? (
						boxes.length === 1
						? <div className='center f4 white mt4 br2 w-20 bg-dark-gray'>{`${boxes.length} face detected`}</div>
						: <div className='center f4 white mt4 br2 w-20 bg-dark-gray'>{`${boxes.length} faces detected`}</div>
					)
					: <div className='center f4 white mt4 br2 w-20 bg-dark-gray'>{`No faces detected`}</div>
				)
				: ``
			}
			<div className='absolute mt5 mb4'>
				<img id='inputImage' src={imageUrl} alt='' width='500px' heigh='auto' />
				{/*<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>*/}
				{
					boxes.map((box, i) => {
						return (
							<div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
						);
					})
				}
			</div>
		</div>
	);
}

export default FaceRecognition;
