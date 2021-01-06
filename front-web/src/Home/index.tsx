import './styles.css'
import Footer from '../Footer/index'
import { ReactComponent as HomeImage } from './main.svg'

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">

                        <h1 className="home-title">
                            Faça seu pedido <br />
                        que entregamos  <br />
                        pra você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Escolha o seu pedido e em poucos minutos <br />
                        levaremoss na sua porta
                        </h3>
                        <a href="orders" className="home-bttn-order">
                            FAZER PEDIDO
                        </a>

                    </div>
                    <div className="home-image">
                        <HomeImage />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;