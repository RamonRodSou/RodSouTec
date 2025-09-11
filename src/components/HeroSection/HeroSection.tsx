import { Box, Grid, styled, Typography } from '@mui/material'
import { useEffect, useRef } from 'react';
import { Fade } from "react-awesome-reveal";
import YouTube, { YouTubeProps } from 'react-youtube';

const BoxApresentacao = styled(Box)(({ theme }) => ({
	display: 'flex',
	margin: '2rem 1rem',
	gap: '5rem',
	height: '50vh',
	justifyContent: 'space-between',
	alignItems: 'space-between',

	'@media (max-width: 900px) and (max-height: 420px)': {
		flexDirection: 'column-reverse',
		margin: '0 2rem',
	},

	[theme.breakpoints.down('md')]: {
		flexDirection: 'column-reverse',
		justifyContent: 'center',
		alignItems: 'center',
		height: '60vh',
	},

	[theme.breakpoints.down('sm')]: {
		margin: '5rem 2rem',
	},
}))

const TituloImpactante = styled(Typography)(({ theme }) => ({
	fontSize: '3rem',
	fontWeight: 'bold',
	fontFamily: 'Orbitron',
	width: '80%',
	background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
	textFillColor: 'transparent',
	marginTop: '4rem',

	'@media (max-width: 900px) and (max-height: 8000px)': {
		width: '100%',
	},

	[theme.breakpoints.down('md')]: {
		fontSize: '1.7rem',
		width: '100%',
		margin: '0',
	},


	[theme.breakpoints.down('sm')]: {
		fontSize: '2rem',
		width: '100%',
		margin: '0',
	},
}))

const BoxYoutube = styled(Box)(({ theme }) => ({
	position: "relative",
	width: "100%",
	maxWidth: "700px",
	paddingBottom: "30.25%",
	height: 0,
	borderRadius: "16px",
	overflow: "hidden",
	border: "4px solid var(--titleSection-color)",
	boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",

	"& iframe": {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		border: "none",
	},

	[theme.breakpoints.down("md")]: {
		maxWidth: "500px",
		paddingBottom: "36%",
	},

	[theme.breakpoints.down("sm")]: {
		maxWidth: "100%",
		paddingBottom: "56.25%",
	},
}));

const HeroSection = () => {
	const playerRef = useRef<any>(null);

	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		playerRef.current = event.target;
		event.target.mute();
		event.target.playVideo();
		event.target.setPlaybackQuality('highres');
	};

	useEffect(() => {
		const enableSound = () => {
			if (playerRef.current) {
				playerRef.current.unMute();
				playerRef.current.setVolume(60);
			}

			window.removeEventListener("click", enableSound);
			window.removeEventListener("scroll", enableSound);
			window.removeEventListener("keydown", enableSound);
		};

		window.addEventListener("click", enableSound);
		window.addEventListener("scroll", enableSound);
		window.addEventListener("keydown", enableSound);

		return () => {
			window.removeEventListener("click", enableSound);
			window.removeEventListener("scroll", enableSound);
			window.removeEventListener("keydown", enableSound);
		};
	}, []);

	return (
		<BoxApresentacao id='FaleConosco' >
			<Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'start'}>
				<Fade direction="up">
					<TituloImpactante variant='body1'>
						Ramon Rodrigues de Souza
					</TituloImpactante>
				</Fade>
				<Fade direction="down">
					<Typography variant='body1' >
						Desenvolvedor de Soluções | Especialista em Java, Spring e React
					</Typography>
				</Fade>
			</Grid>
			<BoxYoutube>
				<YouTube
					videoId="KU-9AYZciN8"
					opts={{
						width: "100%",
						height: "100%",
						playerVars: {
							autoplay: 1,
							mute: 0,
							controls: 1,
						},
					}}
					onReady={onPlayerReady}
				/>
			</BoxYoutube>

		</BoxApresentacao >
	)
}

export default HeroSection


