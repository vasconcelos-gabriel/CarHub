'use client'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className="hero">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title">
          Encontre, reserve ou alugue um carro -- rápido e facil!
        </h1>
        <p className="hero__subtitle">
          {' '}
          Otimize sua experiência de aluguel de carros com nosso processo de
          reserva sem esforço.
        </p>
        <CustomButton
          title="Explorar carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
