import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const userNameFormat = (userName) => `@${userName}`;

    const users = [
        {
            userName: 'gianndev',
            name: 'Gian Eloin Barboza Ruiz',
            initialIsFollowing: true
        },
        {
            userName: 'midudev',
            name: 'Miguel Àngel Duran',
            initialIsFollowing: true
        },
        {
            userName: 'BehindTGames',
            name: 'Behind The Games',
            initialIsFollowing: false
        },
        {
            userName: 'LucasRojo',
            name: 'Lucas Rojo',
            initialIsFollowing: false
        }
    ]
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, initialIsFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            formatUsername={userNameFormat}
                            userName={userName}
                            initialIsFollowing={initialIsFollowing} >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}