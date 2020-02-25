import './Landing.scss';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Landing extends Component {
    render() {
        return (
            <>
                <h1>Landing</h1>
                <Link to="/auth">Авторизация</Link>
                <br/>
                <Link to="/reg">Регистрация</Link>
                <br/>
                <br/>
                <Link to="/verify">Страница подтверждения регистрации</Link>
                <br/>
                <br/>
                <Link to="/dashboard">Страница Home</Link>
                <br/>
                <Link to="/dashboard/tasks">Страница Tasks</Link>
                <br/>
                <Link to="/dashboard/new">Страница Добавления задачи</Link>
                <br/>
                <Link to="/dashboard/archive">Страница Archive</Link>
            </>
        )
    }
}