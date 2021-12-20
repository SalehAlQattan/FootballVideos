import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/leagues.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const NavBar = () => {
	return (
		<div
			style={{
				zIndex: '1',
				position: 'fixed',
				top: 10,
			}}
		>
			<Typography textAlign='left'>
				<Button variant='contained'>
					<ArrowBackIcon />{' '}
					<Link to='/' className='league-link-back'>
						Back
					</Link>
				</Button>
			</Typography>
		</div>
	)
}

export default NavBar
