let ul = document.querySelector('.ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

// let CreateDOMObjects = () => {
//     const DOM = 
//         <div vw class="enabled">
//         <div vw-access-button class="active"></div>
//         <div vw-plugin-wrapper>
//             <div class="vw-plugin-top-wrapper"></div>
//         </div>
//         </div>
//     ;
//     document.body.insertAdjacentHTML('beforeend', DOM);
// }

// let ImportScriptFile = () => {
//     let script = document.createElement('script');
//     script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
//     script.onload = () => {
//         new window.VLibras.Widget('https://vlibras.gov.br/app');
//     };
//     document.head.appendChild(script)
// }

// (() => {
//     window.addEventListener('DOMContentLoaded', e => {
//         CreateDOMObjects();
//         ImportScriptFile();
//     });
// })();