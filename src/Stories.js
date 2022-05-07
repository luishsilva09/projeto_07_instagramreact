function Storie(props){    
    return(
        <div>
                <img src={props.image} alt={props.name}/> {props.name}
        </div>
    );
};

export default function Stories(){
    const fotoPerfilStories = [
        {image:'images/9gag 1.png', name:'9gag'},
        {image:'images/respondeai.png', name:"RespondeAi"},
        {image:'images/filomoderna 1.png', name:"filomoderna"},
        {image:'images/wawawiwacomicsa 1.png', name:"wawa"},
        {image:'images/barked 1.png', name:"barked"},
        {image:'images/cat1.jpg', name:"cat"},
        {image:'images/respondeai.png', name:"lalal"},
       
    ];
    return(
        <div class="storie">
            {fotoPerfilStories.map(perfil => <Storie image={perfil.image} name={perfil.name}/>)}
            <section class="icone">
                <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
            </section>
        </div>

    );
};