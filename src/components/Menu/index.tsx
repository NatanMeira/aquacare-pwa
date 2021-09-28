import * as S from './styles'
import { Menu as MenuIcon } from '@styled-icons/evaicons-solid/Menu'
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'
import Heading from 'components/Heading'
import React, { useState } from 'react'
import Link from 'next/link'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.iconWrapper>
        <S.Logo
          src="/img/logo.svg"
          alt="Aquarium icon"
          height="100%"
          width="100%"
        />
      </S.iconWrapper>
      <Heading>AQUACARE</Heading>
      <S.iconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon className="menu-icon" />
      </S.iconWrapper>

      <S.MenuFull isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/aquarios" passHref>
            <S.MenuLink>AQUARIOS</S.MenuLink>
          </Link>
          <Link href="/status" passHref>
            <S.MenuLink>STATUS</S.MenuLink>
          </Link>
          <Link href="/dispositivos" passHref>
            <S.MenuLink>DISPOSITIVOS</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
