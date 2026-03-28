import { escapeSvelte } from 'mdsvex';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-markup.js';

/** @param {string} code @param {string | undefined} lang */
function highlighter(code, lang) {
	const language = lang && Prism.languages[lang] ? lang : 'text';
	const grammar = Prism.languages[language];
	const highlighted = grammar
		? escapeSvelte(Prism.highlight(code, grammar, language))
		: escapeSvelte(code);
	return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
}

export default {
	extensions: ['.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter
	}
};
