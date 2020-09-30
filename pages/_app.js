import React, { createContext, useEffect, useState } from 'react'
import { Scroll, LocomotiveScrollOptions } from 'locomotive-scroll'

interface ContextProps {
  scroll: Scroll | null
}

export const SmoothScrollContext = createContext<ContextProps>({
  scroll: null,
})

interface Props {
  options: LocomotiveScrollOptions
}

export const SmoothScrollProvider: React.FC<Props> = ({ children, options }) => {
  const [scroll, setScroll] = useState<Scroll | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        setScroll(
          new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]') ?? undefined,
            ...options,
          })
        )
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`)
      }
    })()

    return () => {
      scroll?.destroy()
    }
  }, [])

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'