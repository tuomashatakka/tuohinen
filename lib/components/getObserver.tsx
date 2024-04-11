'use client'

export interface IntersectionObserverCallback {
  // eslint-disable-next-line no-undef
  (entries: IntersectionObserverEntry[] & { isIntersecting?: boolean }, observer: IntersectionObserver): void;
}

const OBSERVER_OPTIONS = {
  root:       null,
  threshold:  0,
  rootMargin: '0px',
}


const intersectionHandlers: Set<Function> = new Set()


const handleRegisteredIntersectionCallbacks = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) =>
  intersectionHandlers.forEach(callback =>
    callback.call(observer, entries, observer))


export default function getObserver (): IntersectionObserver {
  try {
    getObserver.prototype._observer =
      getObserver.prototype._observer ||
      new IntersectionObserver(handleRegisteredIntersectionCallbacks, OBSERVER_OPTIONS)
  }
  catch (err) {

    // For esdom
    getObserver.prototype._observer =
      {
        observe: () => {},
        unobserve: () => {},
      }
  }

  return getObserver.prototype._observer
}


const observe = (node: HTMLElement, fn: IntersectionObserverCallback) => {
  getObserver().observe(node)
  intersectionHandlers.add(fn)

  return true
}


const dispose = (node: HTMLElement, fn: IntersectionObserverCallback) => {
  getObserver().unobserve(node)
  intersectionHandlers.delete(fn)
}


export const observeIntersection = (node: HTMLElement, fn: IntersectionObserverCallback) => {
  observe(node, fn)

  return { dispose: () => dispose(node, fn) }
}



Object.defineProperty(module.exports, 'observer', { get: () => getObserver() })
