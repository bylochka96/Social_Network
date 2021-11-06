import React from "react";
import style from './Users.module.css';
import * as axios from "axios";
import defAvatar from "../../assets/images/default-avatar.jpg";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
      })

    }
  }

  render() {
    return (
      <div>
        <button className={style.getUsers} onClick={this.getUsers}>get Users from Server</button>

        {
          this.props.users.map((user) => {
            return (
              <div className={style.user} key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.avaURL : defAvatar} alt="avatar"
                                     className={style.userAvatar}/>
                            </div>
                            <div>
                              {user.isFollowed
                                ? <button onClick={() => this.props.toggleFollow(user.id)}>Unfollow</button>
                                : <button onClick={() => this.props.toggleFollow(user.id)}>Follow</button>}
                            </div>
                        </span>
                <span>
                                <span><div>{user.name}</div><div>{"user.status"}</div></span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Users;