var HumbleBundleKeyExporter = (function (e) {
  'use strict';
  function t(e) {
    return new Promise(t => setTimeout(t, e));
  }
    const o = async () => {
      let e = [
        ...document.querySelectorAll('.unredeemed-keys-table tbody tr'),
      ].map(e => (
          e.querySelector('.game-name h4')
          .textContent.trim()
          .replace(/®|™/g, '')
      ));
      return null !==
        document.querySelector('.js-jump-to-page.current + .js-jump-to-page')
        ? (await (async () => {
            const e = document.querySelector(
              '.js-jump-to-page.current + .js-jump-to-page'
            );
            null !== e && (e.click(), await t(100));
          })(),
          e.concat(await o()))
        : e;
    };
  return (
    (e.run = function () {
      window.location.pathname.includes('/home/keys')
        ? (async () => {
            console.log('Setting first page.'),
              document
                .querySelector('.js-jump-to-page[data-index="0"]')
                .click(),
              await t(100);
          })()
            .then(o)
            .then(e => e.join('\n'))
            .then(e =>
              (function (e, t) {
                const n = document.createElement('a');
                (n.href = URL.createObjectURL(new Blob([e]))),
                  (n.download = t),
                  n.click(),
                  setTimeout(() => URL.revokeObjectURL(n.href), 500);
              })(e, 'humble-bundle-titles.txt')
            )
        : console.log('No eligible page detected.');
    }),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  );
})({});
