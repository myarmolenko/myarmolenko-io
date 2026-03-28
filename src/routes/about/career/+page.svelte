<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';

	interface Experience {
		title: string;
		company: string;
		period: string;
		summary: string;
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
		validity: string;
	}

	const intro =
		"I'm a back-end engineer with a focus on Java and Spring, working mostly on e-commerce and distributed systems. Over the past few years I've been building and maintaining microservices, integrating APIs, and working within Agile teams — most of that time at EPAM Systems. I also hold a couple of AWS certifications and am currently finishing a Master's in Computer Science.";

	const experience: Experience[] = [
		{
			title: 'Software Engineer',
			company: 'EPAM Systems',
			period: '01/2024 – Present',
			summary:
				'Working on an e-commerce engine undergoing a transition from monolithic to microservices architecture. I coordinate a small delivery team, own feature planning and technical documentation, and handle production releases — including a critical incident that protected around 14,000 users.'
		},
		{
			title: 'Software Engineer',
			company: 'EPAM Systems',
			period: '07/2023 – 01/2024',
			summary:
				'Delivered features across promotions, order management, and pricing under tight deadlines. Designed a custom module from scratch that reduced database issues and improved deployment stability.'
		},
		{
			title: 'Junior Software Engineer',
			company: 'EPAM Systems',
			period: '08/2021 – 07/2022',
			summary:
				'Got my footing working on a retail platform — contributing to account, cart, and product systems, and helping bridge communication between microservices and legacy monolithic components.'
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
		{ name: 'AWS Certified AI Practitioner', validity: '09/2024 – 09/2027' },
		{ name: 'AWS Certified Cloud Practitioner', validity: '05/2024 – 05/2027' },
		{ name: 'AWS Knowledge: Serverless', validity: '02/2024' },
		{ name: 'MACH/Commercetools: Associate Java Developer', validity: '08/2023 – 08/2025' }
	];
</script>

<svelte:head>
	<title>Career - Maksym Yarmolenko</title>
	<meta name="description" content="A brief overview of my journey as a software engineer" />
	<meta property="og:title" content="Career - Maksym Yarmolenko" />
	<meta property="og:description" content="A brief overview of my journey as a software engineer" />
</svelte:head>

<PageLayout width="narrow">
	<PageHeader title="Career" />

	<div class="career">
		<p class="intro">{intro}</p>

		<section class="section">
			<h2 class="section-title">Experience</h2>
			<div class="entries">
				{#each experience as job}
					<div class="entry">
						<div class="entry-header">
							<span class="entry-title">{job.title} — {job.company}</span>
							<span class="entry-meta">{job.period}</span>
						</div>
						<p class="entry-summary">{job.summary}</p>
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

	.intro {
		color: var(--text-color-secondary);
		line-height: 1.7;
	}

	.section-title {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-color-muted);
		margin-bottom: var(--space-4);
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

	.entry-summary {
		color: var(--text-color-secondary);
		font-size: var(--font-size-sm);
		line-height: 1.6;
	}
</style>
