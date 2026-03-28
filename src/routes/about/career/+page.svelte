<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
	import TagBadge from '$lib/components/posts/TagBadge.svelte';

	interface Experience {
		title: string;
		company: string;
		period: string;
		project: string;
		highlights: string[];
	}

	interface Education {
		degree: string;
		institution: string;
		location: string;
		period: string;
		major: string;
	}

	interface Certification {
		name: string;
		description: string;
		validity: string;
	}

	const summary =
		'Back-end Java Engineer with more than 3 years of experience in designing, developing, and optimizing scalable applications. Proficient in Java, Spring Framework, and Microservices architecture, with a strong ability to integrate RESTful APIs and troubleshoot complex issues. Experienced in collaborating within Agile teams to deliver high-quality software solutions. Skilled in optimizing application performance and leveraging cloud technologies such as AWS to build robust, efficient systems.';

	const skills: string[] = [
		'Java', 'Spring', 'Hibernate', 'SQL', 'Hybris', 'AWS',
		'Microservices Architecture', 'Design Patterns', 'RESTful API',
		'HTML/CSS/JS', 'Kafka', 'Docker', 'DynamoDB',
		'CI/CD (Jenkins, Bitbucket)', 'Git', 'Jira',
		'Unit Testing (JUnit5, Mockito)', 'Agile', 'Scrum/Kanban'
	];

	const languages: string[] = ['English – Upper Intermediate'];

	const experience: Experience[] = [
		{
			title: 'Software Engineer',
			company: 'EPAM Systems',
			period: '01/2024 – Present',
			project: 'E-Commerce engine project',
			highlights: [
				'Supported the transition from a monolithic to a microservices architecture, with a focus on API integration and implementing cutting-edge technologies including Java, Spring, Kafka, and AWS.',
				'Coordinated a small team of 3 developers and 1 QA to deliver new functionality, ensuring timely project delivery, quality assurance, and effective cross-functional collaboration.',
				'Provided detailed solutions for new features by thoroughly defining tickets and development plans and creating comprehensive technical documentation to ensure smooth integration.',
				'Managed production releases and rapidly resolved critical production issues by coordinating with cross-functional teams.',
				'Developed Kafka consumers/producers, optimizing message processing at scale to ensure efficient data flow and real-time analytics in high-volume environments.',
				'Identified and resolved critical issues, preventing immediate impact on 14,000 users and safeguarding 15% of the user base from potential future disruptions.'
			]
		},
		{
			title: 'Software Engineer',
			company: 'EPAM Systems',
			period: '07/2023 – 01/2024',
			project: 'Retail & Distribution project',
			highlights: [
				'Developed long-term solutions within tight deadlines, including processes, promotions, and order management features, deploying critical functionality that drove increased revenue and boosted customer acquisition.',
				'Designed and implemented a custom module from scratch, reducing database issues and script execution time during releases, leading to smoother deployment processes and improved overall system performance.',
				'Established efficient scripts and queries to handle large volumes of data and automated their execution.',
				'Supported and maintained existing functionality to ensure smooth operations and high user satisfaction.',
				'Designed and implemented unit and integration tests to validate the software\'s stability and performance.'
			]
		},
		{
			title: 'Junior Software Engineer',
			company: 'EPAM Systems',
			period: '08/2021 – 07/2022',
			project: 'Retail & Distribution project',
			highlights: [
				'Improved processes to optimize efficiency and align them with the ever-changing needs of the business.',
				'Coordinated integration efforts between microservices and legacy monolithic systems to enable efficient, seamless communication across platforms.',
				'Contributed to the development of account, cart, and product management systems, as well as various general tasks, to meet specific business needs.',
				'Participated in Agile ceremonies, including daily stand-ups, sprint planning, sprint reviews, and sprint retrospectives.'
			]
		}
	];

	const education: Education[] = [
		{
			degree: 'Master of Science',
			institution: 'Lviv Polytechnic National University',
			location: 'Lviv, Ukraine',
			period: '2024–2026',
			major: 'Computer Science'
		},
		{
			degree: 'Bachelor of Science',
			institution: 'Lviv Polytechnic National University',
			location: 'Lviv, Ukraine',
			period: '2020–2024',
			major: 'Computer Science'
		}
	];

	const certifications: Certification[] = [
		{
			name: 'AWS Certified AI Practitioner',
			description: 'Foundational knowledge in AI and machine learning concepts, along with expertise in AWS resources and frameworks.',
			validity: '09/2024 – 09/2027'
		},
		{
			name: 'AWS Certified Cloud Practitioner',
			description: 'Foundational knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support.',
			validity: '05/2024 – 05/2027'
		},
		{
			name: 'AWS Knowledge: Serverless',
			description: 'Certification in utilizing AWS services for developing and deploying applications without server management, optimizing scalability and resource utilization.',
			validity: '02/2024'
		},
		{
			name: 'MACH/Commercetools: Associate Java Developer',
			description: 'Certification in MACH architecture with proven proficiency in utilizing the commercetools platform to develop e-commerce solutions.',
			validity: '08/2023 – 08/2025'
		}
	];
</script>

<svelte:head>
	<title>Career - Maksym Yarmolenko</title>
	<meta name="description" content="A brief overview of my journey as a software engineer" />
</svelte:head>

<PageLayout width="narrow">
	<PageHeader title="Career" />

	<div class="career">
		<section class="section">
			<h2 class="section-title">Summary</h2>
			<p>{summary}</p>
		</section>

		<section class="section">
			<h2 class="section-title">Skills</h2>
			<div class="tags">
				{#each skills as skill}
					<TagBadge tag={skill} />
				{/each}
			</div>
			<div class="tags languages">
				{#each languages as language}
					<TagBadge tag={language} />
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Professional Experience</h2>
			<div class="entries">
				{#each experience as job}
					<div class="entry">
						<div class="entry-header">
							<span class="entry-title">{job.title} — {job.company}</span>
							<span class="entry-meta">{job.period} · {job.project}</span>
						</div>
						<ul class="highlights">
							{#each job.highlights as highlight}
								<li>{highlight}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Education</h2>
			<div class="entries">
				{#each education as edu}
					<div class="entry">
						<div class="entry-header">
							<span class="entry-title">{edu.degree} — {edu.institution}, {edu.location}</span>
							<span class="entry-meta">{edu.period} · {edu.major}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Certifications</h2>
			<div class="entries">
				{#each certifications as cert}
					<div class="entry">
						<div class="entry-header">
							<span class="entry-title">{cert.name}</span>
							<span class="entry-meta">{cert.validity}</span>
						</div>
						<p class="entry-description">{cert.description}</p>
					</div>
				{/each}
			</div>
		</section>
	</div>
</PageLayout>

<style>
	.career {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
	}

	.section-title {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-color-muted);
		margin-bottom: var(--space-4);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.languages {
		margin-top: var(--space-3);
	}

	.entries {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.entry-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: var(--space-1);
		margin-bottom: var(--space-2);
	}

	.entry-title {
		font-weight: var(--font-weight-medium);
	}

	.entry-meta {
		font-size: var(--font-size-sm);
		color: var(--text-color-muted);
	}

	.highlights {
		padding-left: var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		color: var(--text-color-secondary);
	}

	.entry-description {
		color: var(--text-color-secondary);
		font-size: var(--font-size-sm);
	}
</style>
