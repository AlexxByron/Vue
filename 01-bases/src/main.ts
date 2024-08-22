import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import './bases/01-const-let';
//import './bases/02-object';
//import './bases/03-arrays';
//import './bases/04-function';
//import './bases/05-desectrura';
//import './bases/06-dese-arr';
//import './bases/06-dese-arr';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
