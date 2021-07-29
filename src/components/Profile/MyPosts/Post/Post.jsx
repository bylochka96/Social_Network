import style from './Post.module.css'

const Post = (post) => {
    let likeString = 'Likes'
    if (post.likesCount == 1) {likeString = 'Like'}
    return (
        <div className={style.post}>
            <img src="https://i.pinimg.com/736x/fe/fe/21/fefe21822da0dbd4b7761fc2c4050130--avatar-film-navi-avatar.jpg"
                 alt="avatar_of_writer"/>
            <a href="#">{post.message}</a>
            <br/>
            <span>{post.likesCount} {likeString}</span>
        </div>
    )
}
export default Post;