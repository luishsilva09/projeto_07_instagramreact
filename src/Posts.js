function Post(props){
    return(
        <div class="post">
            <div class="post-superior">
                <img src={props.imagePerfil} alt={props.name}/>
                <h2>{props.name}</h2>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={props.imagePost} alt=""/>
            <div class="post-inferior">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img src={props.imageLike} alt=""/>
                    <h3> Curtido por respondeai e outras 101.523 pessoas</h3>
                </div>
                <div class="comentar">
                    <input type="text" name="coment" id="coment" placeholder="Adicionar comentário..." />
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const postContent = [
        { name: 'meowed', imagePerfil: 'images/meowed.png', imagePost: 'images/cat1.jpg', imageLike: 'images/respondeai.png' },
        { name: '9gag', imagePerfil: 'images/9gag 1.png', imagePost: 'images/video.mp4', imageLike: 'images/9gag 1.png' },
        { name: 'meowed', imagePerfil: 'images/meowed.png', imagePost: 'images/cat1.jpg', imageLike: 'images/respondeai.png' },
    ]
    return (
        <div>
            {postContent.map(post=> <Post name={post.name} imagePerfil={post.imagePerfil} imagePost={post.imagePost} imageLike={post.imageLike}/>)}
        </div>
    )
}