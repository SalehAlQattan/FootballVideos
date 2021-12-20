import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import axios from 'axios'
import NavBar from '../components/NavBar'
import CircularProgress from '@mui/material/CircularProgress'
import '../styles/leagues.css'

const SerieA = () => {
	const [serieA, setSerieA] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					'https://www.scorebat.com/video-api/v3/'
				)
				setSerieA(data.response)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [serieA])

	return (
		<div>
			<NavBar />
			<Typography marginTop='5rem' variant='h5'>
				Serie A Matches
			</Typography>
			<div className='leagues'>
				{serieA.length === 0 ? (
					<CircularProgress size='30' />
				) : (
					<>
						{serieA.map((match) => {
							if (match.competition === 'ITALY: Serie A') {
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

export default SerieA
