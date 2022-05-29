/**
 * scroll smoothly to a element in the DOM.
 * @param elem element to scroll to
 * @param offset int offset pixels from element (default is 0)
 * @returns promise that gets resolved when scrolling is complete
 */
export function smoothScrollPromise(
  elem: HTMLElement | undefined = undefined,
  offset = 0
) {
  let targetPosition = 0;
  if (elem) {
    const rect = elem.getBoundingClientRect();
    targetPosition = rect.top + self.pageYOffset + offset;
  }
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });

  return new Promise((resolve, reject) => {
    const failed = setTimeout(() => {
      reject();
    }, 2000);

    const scrollHandler = () => {
      if (self.pageYOffset === targetPosition) {
        window.removeEventListener('scroll', scrollHandler);
        clearTimeout(failed);
        resolve(null);
      }
    };
    if (self.pageYOffset === targetPosition) {
      clearTimeout(failed);
      resolve(null);
    } else {
      window.addEventListener('scroll', scrollHandler);
    }
  });
}
