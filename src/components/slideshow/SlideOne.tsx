import { slideStyles } from 'components/slideshow/Slideshow'
import Image from 'next/image'

export function SlideOne() {
  return (
    <div css={slideStyles}>
      <div className="content">
        <Image
          priority={true}
          alt="slideshow image"
          src="/slideshow/report.svg"
          width={400}
          height={300}
        />
        <div css={{ textAlign: 'center' }}>
          <h1>Bienvenido a Leroma System</h1>
          <p>Sugerencia: desliza el dedo para continuar</p>
        </div>
      </div>
    </div>
  )
}
