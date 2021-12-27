import React from 'react'

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					My name is Georgi Nikov, I am dedicated JavaScript full-stack
					developer. My goal is to provide good front-end designs and working
					back-end. Interested in increasing my development skills and build
					awesome new apps.
				</SectionText>
				<Button onClick={() => (window.location = '#projects')}>
					Learn More
				</Button>
			</LeftSection>
		</Section>
	</>
)

export default Hero
