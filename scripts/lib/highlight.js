const prism = require('prismjs')
const escapeHtml = require('escape-html')
const loadLanguages = require('prismjs/components/index')
const chalk = require('chalk')

function wrap(code, lang) {
  code = code.replace(/[\{\}]/g, match => `{'${match}'}`).replace(/\n/g, '<br>')

  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre class="language-${lang}"><code>${code}</code></pre>`
}

module.exports = (str, lang) => {
  if (!lang) {
    return wrap(str, 'text')
  }

  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch (e) {
      console.warn(chalk.yellow(`Syntax highlight for language "${lang}" is not supported.`))
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}
