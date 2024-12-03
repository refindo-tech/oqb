'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import Image from 'next/image'
import { type FC, useMemo, useRef } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

// import gsapIcon from '@/assets/icons/technologies/gsap.svg'
// import nextIcon from '@/assets/icons/technologies/next.svg'
// import openGLIcon from '@/assets/icons/technologies/opengl.svg'
// import reactIcon from '@/assets/icons/technologies/react.svg'
// import tailwindIcon from '@/assets/icons/technologies/tailwind.svg'
// import threeIcon from '@/assets/icons/technologies/three.svg'
// import typescriptIcon from '@/assets/icons/technologies/typescript.svg'

// import myaIcon from '../../../public/images/assets/client-logo/mya.png'
// import myBeautica from '../../../public/images/assets/client-logo/my_beautica.png'
// import netPlus from "../../../public/images/assets/client-logo/netplus_connection.png"
// import yIrsyadulIbad from "../../../public/images/assets/client-logo/y_irsyadul_ibad.png"
// import untirta from  "../../../public/images/assets/client-logo/untirta.png"
// import isuzu from '../../../public/images/assets/client-logo/isuzu.png'
// import mygIcon from '../../../public/images/assets/client-logo/myg.png'
// import myAcademy from '../../../public/images/assets/client-logo/my_academy.png'
// import pKotaSerang from "../../../public/images/assets/client-logo/p_kota_serang.png"
// import kedaireka from '../../../public/images/assets/client-logo/Kedaireka.png'
// import sma3Serang from "../../../public/images/assets/client-logo/sman_3_kota_serang.png"

const logos =[
    "/images/assets/client-logo/mya.png",
    "/images/assets/client-logo/my_beautica.png",
    "/images/assets/client-logo/netplus_connection.png",
    "/images/assets/client-logo/y_irsyadul_ibad.png",
    "/images/assets/client-logo/untirta.png",
    "/images/assets/client-logo/isuzu.png",
    "/images/assets/client-logo/myg.png",
    "/images/assets/client-logo/my_academy.png",
    "/images/assets/client-logo/p_kota_serang.png",
    "/images/assets/client-logo/Kedaireka.png",
    "/images/assets/client-logo/sman_3_kota_serang.png",
  ]

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Props = {
  isReversed?: boolean
  className?: string
}

// const ICONS: StaticImageData[] = [gsapIcon, nextIcon, openGLIcon, reactIcon, tailwindIcon, threeIcon, typescriptIcon]
// const ICONS = [myaIcon, myBeautica, netPlus, yIrsyadulIbad, untirta,  mygIcon, isuzu, myAcademy, pKotaSerang,  kedaireka, sma3Serang]

// const ELEMENTS = [...ICONS, ...ICONS]
const ELEMENTS = [...logos, ...logos]

const Marquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null)
  const timeline = useRef<GSAPTimeline>()

  useGSAP(
    () => {
      // Translate the container half of its width to the left (the width of list)
      // Then set it back to the start, and repeat infinitely.
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        })
        timeline.current = gsap
          .timeline({
            defaults: { ease: 'none', repeat: -1 },
          })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 20,
          })
          .set(movingContainer.current, { xPercent: 0 })
      }

      setupInfiniteMarqueeTimeline()
    },
    { dependencies: [isReversed] },
  )

  const timelineTimeScaleTween = useRef<GSAPTween>()

  const onPointerEnter = () => {
    if (!timeline.current) return
    timelineTimeScaleTween.current?.kill()
    timelineTimeScaleTween.current = gsap.to(timeline.current, { timeScale: 0.25, duration: 0.4 })
  }

  const onPointerLeave = () => {
    if (!timeline.current) return
    timelineTimeScaleTween.current?.kill()
    timelineTimeScaleTween.current = gsap.to(timeline.current, { timeScale: 1, duration: 0.2 })
  }

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
        //   const isLast = index === ELEMENTS.length - 1
          return (
            <div
              key={index}
              className={twJoin('relative flex shrink-0 items-center justify-center')}
              style={{ width: '120px'}}
            >
              <img src={src} alt="client icon" height={100} className="object-contain" />
            </div>
          )
        })}
      </div>
    ),
    [],
  )

  return (
    <div
      className={twMerge('w-[90%] mx-auto select-none overflow-hidden', className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
      }}>
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {/* {list} */}
      </div>
    </div>
  )
}

export default Marquee