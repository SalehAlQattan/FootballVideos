import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/leagues.css'
import '../styles/leagues.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Leagues = () => {
	return (
		<>
			<Typography variant='h4'>Enjoy Watching Your Favorite League </Typography>
			<div className='leagues'>
				<div className='league'>
					<Typography variant='h4'>English Premier League</Typography>
					<img
						style={{ width: '250px' }}
						src='https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png'
						alt='premier league'
					/>
					<Button variant='contained' style={{ width: '100%' }}>
						<Typography variant='h5'>
							<Link className='league-link' to='/premierleague'>
								watch now <ArrowForwardIcon />
							</Link>
						</Typography>
					</Button>
				</div>
				<div className='league'>
					<Typography variant='h4'>Spain La Liga</Typography>
					<img
						style={{ width: '250px' }}
						src='https://1000logos.net/wp-content/uploads/2018/10/Spanish-La-Liga-logo.png'
						alt='la liga'
					/>
					<Button variant='contained' style={{ width: '100%' }}>
						<Typography variant='h5'>
							<Link className='league-link' to='/laliga'>
								watch now <ArrowForwardIcon />
							</Link>
						</Typography>
					</Button>
				</div>
				<div className='league'>
					<Typography variant='h4'>Italy Serie A</Typography>
					<img
						style={{ width: '250px' }}
						src='https://1000logos.net/wp-content/uploads/2021/10/Italian-Serie-A-logo.png'
						alt='serie a'
					/>
					<Button variant='contained' style={{ width: '100%' }}>
						<Typography variant='h5'>
							<Link className='league-link' to='/seriea'>
								watch now <ArrowForwardIcon />
							</Link>
						</Typography>
					</Button>
				</div>
				<div className='league'>
					<Typography variant='h4'>Germany Bundesliga</Typography>
					<img
						style={{ width: '250px' }}
						src='https://1000logos.net/wp-content/uploads/2019/01/German-Bundesliga-Logo-2002.png'
						alt='bundesliga'
					/>
					<Button variant='contained' style={{ width: '100%' }}>
						<Typography variant='h5'>
							<Link className='league-link' to='/bundesliga'>
								watch now <ArrowForwardIcon />
							</Link>
						</Typography>
					</Button>
				</div>
			</div>
		</>
	)
}

export default Leagues
