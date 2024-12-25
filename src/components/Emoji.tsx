import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'


interface Props{
    rating: number;
}

const emojiMap: { [key: number]: any } = {
  3: { src: meh, alt: "meh", className: "size-6" },
  4: { src: thumbsUp, alt: "recommended", className: "size-6" },
  5: { src: bullsEye, alt: "exceptional", className: "size-9" },
};

const Emoji = ({rating}:Props) => {
    if (rating < 3) return null;
  return (
      <img {...emojiMap[rating]} style={{marginTop:'1rem'}}/>
  )
}

export default Emoji