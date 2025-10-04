import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ProfileCard() {
  return (
    <div className="card">
      <Image src="https://via.placeholder.com/100" alt="Cris Rayaan" className="avatar" width={100} height={100} />
      <h2 className="name">
        Cris <br /> Rayaan <span>👋</span>
      </h2>
      <p className="desc">
        A Passionate Full Stack Developer 💻 & Product Designer having 12 years of Experiences over 24+ Country
        Worldwide.
      </p>
      <div className="actions">
        <button className="callBtn">Book a call</button>
        <button className="mailBtn">Send Mail</button>
      </div>
      <div className="socials">
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  )
}
