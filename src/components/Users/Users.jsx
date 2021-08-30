import React from "react";
import style from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                isFollowed: true,
                avaURL: 'https://cdn1.tablethotels.com/media/ecs/global/magazine/story-images/031519-it/new/TyrionLannister.jpg',
                name: 'Efim',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                isFollowed: true,
                avaURL: 'https://cdn1.tablethotels.com/media/ecs/global/magazine/story-images/031519-it/new/TyrionLannister.jpg',
                name: 'Vova',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                isFollowed: false,
                avaURL: 'https://cdn1.tablethotels.com/media/ecs/global/magazine/story-images/031519-it/new/TyrionLannister.jpg',
                name: 'Astap',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },

        ])
    }

    return (
        <div>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.avaURL} alt="avatar" className={style.userAvatar}/>
                            </div>
                            <div>
                                {user.isFollowed
                                    ? <button onClick={() => props.toggleFollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => props.toggleFollow(user.id)}>Follow</button>}
                            </div>
                        </span>
                            <span>
                                <span><div>{user.name}</div><div>{user.status}</div></span>
                                <span>
                                    <div>{user.location.country}</div>
                                    <div>{user.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;