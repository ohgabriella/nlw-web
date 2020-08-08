import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/42897265?s=460&u=603cb3fb8e2803e9cae74299857b5d1d9ff3157f&v=4" alt="imagem"/>
                <div>
                    <strong>Gabriella</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de quimica avançada...
                    </p>

            <footer>
                <p>Preço por hora <strong>R$ 80,00</strong></p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}


export default TeacherItem;