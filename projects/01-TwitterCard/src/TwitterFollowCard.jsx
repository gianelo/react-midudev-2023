import { useState } from 'react'
export function TwitterFollowCard (prop) {
  const { children, userName, formatUsername, initialIsFollowing } = prop

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleclickFollowingButton = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/twitter/${userName}`}
          alt={`El Avatar de ${children}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-username'>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleclickFollowingButton}>
          <span className='tw-followCard-button-text'>{buttonText}</span>
          <span className='tw-followCard-button-stopFollowing'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
