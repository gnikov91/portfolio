import React from 'react'

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
	{ number: 10, text: 'Open Source Projects' },
	{ number: 4000, text: 'Coding Hours' },
	{ number: 10, text: 'Frameworks learned' },
	{ number: 15, text: 'Designs created' },
]

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
)

export default Acomplishments
