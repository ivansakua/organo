/* 

 */
import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" className="redes_sociais" alt="Acesse nossa página no Facebook." />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" className="redes_sociais" alt="Acesse nossa página no instagram." />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" className="redes_sociais" alt="Acesse nossa página no Twitter" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" className="logo_organo" alt="Logomarca Organo." />
            </section>
            <section>
                <p>Desenvolvido por Ivan Armond Sant Anna.</p>
            </section>
        </footer>
    );
};

export default Rodape;