function MainSugest(props) {
    return (
        <div class="top-sidebar">
            <img src={props.imagePerfil} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    );
};
function Sugest(props) {
    return (
        <div class="sugestao">
            <img src={props.imagePerfil} alt={props.name} />
            <h2>{props.name}</h2>
            <h5>segue você</h5>
            <h4>Seguir</h4>
        </div>
    );
};
export default function Sidebar() {
    const sugest = [
        { imagePerfil: 'images/badvibesmemes 1.png', name: 'bad.vibes.memes' },
        { imagePerfil: 'images/chibirdart 1.png', name: 'chilbdart' },
        { imagePerfil: 'images/respondeai.png', name: 'bad.vibes.memes' },
        { imagePerfil: 'images/respondeai.png', name: 'bad.vibes.memes' },
        { imagePerfil: 'images/respondeai.png', name: 'bad.vibes.memes' }
    ];
    return (
        <div class="sidebar">
            <MainSugest imagePerfil={sugest[0].imagePerfil} name={sugest[0].name} />
            <div class="sugestoes">
                <p>Sugestões para você</p>
                {sugest.map(sugest => <Sugest imagePerfil={sugest.imagePerfil} name={sugest.name} />)}
            </div>
            <div class="direitos">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais
                relevantes • Hashtags • Idioma
            </div>

        </div>
    );
};