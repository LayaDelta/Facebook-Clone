import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import BotonFc from './componentes/atom/Button/BotonFc'
import { FriendButton } from './componentes/atom/FriendButton/FriendButton'
import { Screach } from './componentes/atom/Screach/Screach'
import { Logo } from './componentes/atom/Logo/Logo'
import ButtonIsland from './componentes/atom/ButtonIslands/ButtonIsland'


ReactDOM.createRoot(document.getElementById('root')).render(
 <Fragment>
    <ButtonIsland Icon="House.svg"/>
    <Logo/>
    <Screach/>
   
</Fragment>

)
