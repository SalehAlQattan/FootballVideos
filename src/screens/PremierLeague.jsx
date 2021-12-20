import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import '../styles/leagues.css'
import NavBar from '../components/NavBar'

const PremierLeague = () => {
	const [premierLeague, setPremierLeague] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					'https://www.scorebat.com/video-api/v3/'
				)
				setPremierLeague(data.response)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [premierLeague])

	return (
		<div>
			<NavBar />
			<Typography marginTop='5rem' variant='h5'>
				Premier League Matches
			</Typography>
			<div className='leagues'>
				{premierLeague.length === 0 ? (
					<CircularProgress size='30' />
				) : (
					<>
						{premierLeague.map((match) => {
							if (match.competition === 'ENGLAND: Premier League') {
								return (
									<div className='league'>
										<Typography variant='h5'>{match.title}</Typography>
										<Typography variant='h6'>
											Date: {match.date.substring(0, 10)}
										</Typography>
										<Typography variant='h6'>
											Time: {match.date.substring(12, 16)}
										</Typography>
										<div
											style={{ width: '100%', height: '100%' }}
											dangerouslySetInnerHTML={{
												__html: match.videos[0].embed,
											}}
										></div>
									</div>
								)
							} else {
								return null
							}
						})}
					</>
				)}
			</div>
		</div>
	)
}

export default PremierLeague
