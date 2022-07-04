import React,{useState, useEffect, createContext} from 'react';

//named import of function because we r going to export 2 functions  
export const EmployeeContext = createContext();

export const EmployeeProvider = props => {
	const [loading, setLoading] = useState(true);
    
    const [users, setUsers] = useState([]);

    	const getUser = async () => {
			const response = await fetch('https://randomuser.me/api/?inc=gender,name,nat,cell,location,picture,email&results=20');
			const data =  await response.json();
			setUsers(data.results);
			setLoading(false);
			
		}

		useEffect(() => {
			getUser();
		},[])
		
		if(loading){
			return <h5></h5>
		} else {
			return(
				<EmployeeContext.Provider value={[users,setUsers]}>
					{props.children}
				</EmployeeContext.Provider>
			);
		}	
		
};