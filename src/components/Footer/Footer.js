import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => {
  const { name, role, description, resume, social, picture } = about

  return (
  <footer className='footer right'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link footer__link'
                title='GitHub'
                alt='GitHub'
                target='_new'
              >
                GitHub 
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link footer__link'
                title='LinkedIn'
                name='LinkedIn'
                target='_new'
              >
                LinkedIn 
              </a>
            )}
          </>
        )}
    <a
      href='https://github.com/rjshkhr/cleanfolio' target='_new'
      className='link footer__link'
    >
      Template
    </a>
  </footer>
)
}

export default Footer
