import { useRef } from "react"

function nextTick(callback: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}

function addAnimated(el: HTMLElement) {
  el.classList.add('animated')
  const handler = () => {
    el.classList.remove('animated')
  }
  el.addEventListener('animationend', handler, false)
}

let ghostContainer: HTMLElement | null = null
let ghostIcon: HTMLElement | null = null

export function useAddToCart(container: HTMLElement | string) {
  const target = useRef(
    typeof container === 'string'
      ? document.querySelector(container)
      : container
  )
  
  
  const createGhost = (animateEnd: () => void) => {
    if (ghostContainer) {
      return
    }

    ghostContainer = document.createElement('div')
    ghostContainer.className = 'cart-ghost'

    ghostIcon = document.createElement('span')
    ghostIcon.className = 'cart-ghost-icon'

    ghostContainer.addEventListener('transitionend', () => {
      ghostContainer!.classList.remove('animated')
      animateEnd()
    })

    ghostContainer.appendChild(ghostIcon)
    document.body.appendChild(ghostContainer)
  }

  function playAnimation(el: HTMLElement) {
    if (!target.current) {
      return
    }

    createGhost(() => {
      addAnimated(target.current as unknown as HTMLElement)
    })

    const rect = el.getBoundingClientRect()
    const targetRect = target.current!.getBoundingClientRect()
    ghostContainer!.style.setProperty('top', `${rect.top}px`)
    ghostIcon!.style.setProperty('left', `${rect.left - targetRect.left}px`)

    nextTick(() => {
      ghostContainer!.classList.add('animated')
      ghostContainer!.style.setProperty('top', `${targetRect.top}px`)
      ghostIcon!.style.setProperty('left', '0px')
    })
  }

  return {
    playAnimation
  }
}