import { existsSync } from 'fs';
import { join } from 'path';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = () => {
	const hasCv = existsSync(join(process.cwd(), 'static', 'Maksym_Yarmolenko_CV.pdf'));
	return { hasCv };
};
