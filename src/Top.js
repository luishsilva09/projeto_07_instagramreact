
export default function Top(){
    const icones = [
        'paper-plane-outline',
        'compass-outline',
        'heart-outline',
        'person-outline'
    ]
    
    return(
        <div class="top">
            <div>
                <ion-icon name="logo-instagram"></ion-icon>
                <a href="https://www.instagram.com/"><img src="images/logo.png" alt="logo" class="logo-desktop" /></a>
            </div>
            <a href="https://www.instagram.com/"><img src="images/logo.png" alt="logo" class="logo-mobile" /></a>
            <div class="caixa-pesquisa">Pesquisar</div>
            <div class="icones-direita">
                {icones.map(icone => <ion-icon name={icone}></ion-icon>)}
            </div>
        </div>
    )
}