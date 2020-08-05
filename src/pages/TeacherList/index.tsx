import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"></img>
                    </Link>
                    <img src={logoImg} alt="Proffy"></img>
                </div>

                <div className="header-content">
                    <strong>
                        Esses são os proffys disponiveis.
                    </strong>
                </div>
            </header>
        </div>
    )
}

export default TeacherList;