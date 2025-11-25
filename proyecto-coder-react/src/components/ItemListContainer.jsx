import '../Style/Style.css'
import bannerImg from'../assets/gym-banner.jpg'

function ItemListContainer  ({greeting}) {
    return (
    <secction className="containerBanner">
        <div className='banner-text'>
            <h1>{greeting}</h1>
            <p>La mejor indumentaria y accesorios deportivos para tu día a día.</p>
            <button className='btn-primaty'>Comprar ahora</button>
        </div>

        <img className='banner-img' src={bannerImg} alt="banner"/>
    </secction>
    )
}

export default ItemListContainer ;