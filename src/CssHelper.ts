export class CssHelper {
  public static isCssLoaded(url: string) {
    let isLoaded = false;

    if (url) {
      const headElement = document.getElementsByTagName('head')[0];
      const linkElements = headElement ? headElement.getElementsByTagName('link') : null;
      if (linkElements) {
        const sliceLength = -1 * url.length;
        for (let index = 0, length = linkElements.length; index < length && !isLoaded; index++) {
          const linkElement = linkElements[index];
          if (linkElement.href) {
            isLoaded = decodeURIComponent(linkElement.href).slice(sliceLength).toLowerCase() === url.toLowerCase();
          }
        }
      }
    }

    return isLoaded;
  }
}
