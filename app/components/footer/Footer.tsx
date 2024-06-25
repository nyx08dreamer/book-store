import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

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
                        <p>&copy; {new Date().getFullYear()} Mystic Owl. Todos los derechos reservados</p>
                    </div>

                    <FooterList>
                    <h3 className="text-base font-bold mb-2">Síguenos</h3>
                        <div className="flex gap-2">
                        <Link href='https://www.facebook.com/profile.php?id=61561229350403&mibextid=ZbWKwL'>
                                <MdFacebook size={24}></MdFacebook>
                            </Link>
                            <Link href='https://x.com/Mysteryfair1?t=GS_dlK6OzqQISTwXTb5SUg&s=09'>
                                <FaXTwitter size={24}></FaXTwitter>
                            </Link>
                            <Link href='https://www.instagram.com/mysthicowl/'>
                                <AiFillInstagram size={24}></AiFillInstagram>
                            </Link>
                        </div>
                    </FooterList>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;