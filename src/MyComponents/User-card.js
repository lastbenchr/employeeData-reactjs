import React, { useContext } from 'react'
import './User-card.css';
import { EmployeeContext } from '../EmployeeContext';


export default function UserCard({setSelectedCard}) {	
	
	const [users, setUsers] = useContext(EmployeeContext);

	const OnButtonClick = (para)=>{
		 setSelectedCard(para);
	}

    return (
       <>
		<div className="card-container">
		{
			users.map((val) => {
				return (
					<>
							<a className="user-small-card bg1" href='#topScroll' key={val.cell} onClick={() =>OnButtonClick(val)} >
							<div className="text-container">
								<p style={{textTransform:'capitalize'}}>{val.gender} . NL</p>
								<h3 >{val.name.title}. {val.name.first} {val.name.last}</h3>
								<a href="#" title="">{val.email}</a>
							</div>
							<div className="go-corner">
							</div>
						</a>
						
					</>
				)
			})
		}
		</div>	
       </>
    )
}
