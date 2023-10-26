export function setPageScroll(flag: boolean) {
  document.body.style.position = flag ? 'static' : 'fixed';
}
