import * as S from './styles'
import { Menu as MenuIcon } from '@styled-icons/evaicons-solid/Menu'
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'
import Heading from 'components/Heading'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/client'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.iconWrapper>
        <Link href="/">
          <S.Logo
            src="/img/logo.svg"
            alt="Aquarium icon"
            height="100%"
            width="100%"
          />
        </Link>
      </S.iconWrapper>
      <Heading>AQUACARE</Heading>
      <S.iconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon className="menu-icon" />
      </S.iconWrapper>

      <S.MenuFull isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>HOME</S.MenuLink>
          </Link>
          <Link href="/aquariums" passHref>
            <S.MenuLink>AQUÁRIOS</S.MenuLink>
          </Link>
          <Link href="/devices" passHref>
            <S.MenuLink>DISPOSITIVOS</S.MenuLink>
          </Link>
          <button type="button" onClick={() => signOut()}>
            <S.MenuLink role="button">SAIR</S.MenuLink>
          </button>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
