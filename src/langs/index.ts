declare var require: any
let context = require.context('.', true, /^.*.ts$/)
let langs = {}
// get all langs
context.keys().forEach(lang => {
	// skip the index.ts
	if (lang.indexOf('index.ts') > -1) return true;
	// lang.substr(2, lang.length-5): './en.ts' => 'en'
	langs[lang.substr(2, lang.length-5)] = context(lang).default
})
// console.log(langs)

export default langs;