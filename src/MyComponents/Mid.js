import React from 'react'
import './Mid.css';

export default function Mid(props) {
	const people = props.selectedCard;
	const myStyle = {
		textTransform: 'capitalize'
	}

	return (
	<>
    	<div className="detailed-container">

			<div className="image-container">
				<img src={people.picture.large} alt="" />
			</div>

			<div className="txt-container">
				<h1>{people.name.title}. {people.name.first} {people.name.last}</h1>
				
				<p><span style={{color:'#6daffe', display:'inline-block'}}>{people.location.street.number}</span>, {people.location.street.name}, {people.location.city}, 
				{people.location.state}, <strong>{people.location.country},</strong> {people.location.postcode} </p>
				<p>{people.location.timezone.offset} - {people.location.timezone.description} <br/>
				<span style={myStyle}>{people.gender}</span>
				</p>
			</div>

		</div>
	</>
    )
}
