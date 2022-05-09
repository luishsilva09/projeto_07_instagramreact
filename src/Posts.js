import React from 'react';
function Post(props) {
    const [Like, setLike] = React.useState("heart-outline");
    const [Color, setColor] = React.useState("");
    function curtir() {
        setLike('heart');
        setColor("md hydrated like");
        if (Like === 'heart') {
            setLike('heart-outline');
            setColor("md hydrated");
        };
    };
    function ContentPost() {
        if (props.type === "video") {
            return (
                <video loop onClick={curtir}>
                    <source src={props.imagePost} type="video/mp4" />
                </video>
            );
        };
        return (
            <img src={props.imagePost} alt="" onClick={curtir} />
        );
    };
    return (
        <div class="post" >
            <div class="post-superior">
                <img src={props.imagePerfil} alt={props.name} />
                <h2>{props.name}</h2>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <ContentPost />
            <div class="post-inferior">
                <div>
                    <ion-icon name={Like} onClick={curtir} class={Color} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img src={props.imageLike} alt="" />
                    <h3> Curtido por respondeai e outras 101.523 pessoas</h3>
                </div>
                <div class="comentar">
                    <input type="text" name="coment" id="coment" placeholder="Adicionar comentário..." />
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    );
};

export default function Posts() {
    const postContent = [
        { name: 'meowed', imagePerfil: 'images/meowed.png', imagePost: 'images/cat1.jpg', imageLike: 'images/respondeai.png', type: 'image' },
        { name: '9gag', imagePerfil: 'images/9gag 1.png', imagePost: 'images/video.mp4', imageLike: 'images/9gag 1.png', type: 'video' },
        { name: 'meowed', imagePerfil: 'images/meowed.png', imagePost: 'images/cat1.jpg', imageLike: 'images/respondeai.png', type: 'image' },
    ];
    return (
        <div>
            {postContent.map(post => <Post name={post.name} imagePerfil={post.imagePerfil} imagePost={post.imagePost} imageLike={post.imageLike} type={post.type} />)}
        </div>
    );
};