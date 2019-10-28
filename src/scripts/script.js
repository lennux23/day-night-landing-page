const html = document.querySelector('html')
const body = document.querySelector('body')
const content = document.querySelector('.content')

content.addEventListener('click', e => {
  if (e.target.tagName == 'BUTTON'){
    trans();
    let theme = html.getAttribute('data-theme')
    theme == 'dark' ? html.setAttribute('data-theme', '') : html.setAttribute('data-theme', 'dark')
  }
})

const trans = () => {
  body.classList.add ('transition');
/*   window.setTimeout(() => {
    body.classList.remove ('transition');
  }, 1000) */
}