varHumbleBundleKeyExporter=(function(e){'usestrict';functiont(e){returnnewPromise(t=>setTimeout(t,e));}consto=async()=>{lete=[...document.querySelectorAll('.unredeemed-keys-tabletbodytr'),].map(e=>(e.querySelector('.game-nameh4').textContent.trim().replace(/®|™/g,'')));returnnull!==document.querySelector('.js-jump-to-page.current+.js-jump-to-page')?(await(async()=>{conste=document.querySelector('.js-jump-to-page.current+.js-jump-to-page');null!==e&&(e.click(),awaitt(100));})(),e.concat(awaito())):e;};return((e.run=function(){window.location.pathname.includes('/home/keys')?(async()=>{console.log('Settingfirstpage.'),document.querySelector('.js-jump-to-page[data-index="0"]').click(),awaitt(100);})().then(o).then(e=>e.join('\n')).then(e=>(function(e,t){constn=document.createElement('a');(n.href=URL.createObjectURL(newBlob([e]))),(n.download=t),n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),500);})(e,'humble-bundle-keys.json')):console.log('Noeligiblepagedetected.');}),Object.defineProperty(e,'__esModule',{value:!0}),e);})({});
