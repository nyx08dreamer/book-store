import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (<footer className="bg-slate-700 text-slate-200 text-sm mt-16
        ">
            <Container>
                <div className="
                flex items-center md:flew-row justify-bewteen pt-16 pb-8
                ">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Categorías de Libros</h3>
                        <Link href='#'>Fantasía</Link>
                        <Link href='#'>Terror</Link>
                        <Link href='#'>Acción</Link>
                        <Link href='#'>Ciencia Ficción</Link>
                        <Link href='#'>Suspenso</Link>
                        <Link href='#'>Comedía</Link>
                    </FooterList>
                    
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Servicio al Cliente</h3>
                        <Link href='#'>Contáctanos</Link>
                        <Link href='#'>Política de Entrega</Link>
                        <Link href='#'>Retornos e Intercambios</Link>
                        <Link href='#'>FAQs</Link>
                    </FooterList>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">Sobre Nosotros</h3>
                        <p className="mb-2">Vendemos Libros.</p>
                        <p>&copy; {new Date().getFullYear()} Mystic Owl. All rights reserved</p>
                    </div>

                    <FooterList>
                    <h3 className="text-base font-bold mb-2">Síguenos</h3>
                        <div className="flex gap-2">
                        <Link href='#'>
                                <MdFacebook size={24}></MdFacebook>
                            </Link>
                            <Link href='#'>
                                <AiFillTwitterCircle size={24}></AiFillTwitterCircle>
                            </Link>
                            <Link href='#'>
                                <AiFillInstagram size={24}></AiFillInstagram>
                            </Link>
                            <Link href='#'>
                                <AiFillYoutube size={24}></AiFillYoutube>
                            </Link>
                        </div>
                    </FooterList>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;