import { theme } from '../../../defaultThemes'
import { StyledMenuUl, StyledStrong } from './StyledMenu'
import { BsStars } from 'react-icons/bs'

export function Menu() {
  return (
    <header>
      <nav>
        <StyledMenuUl>
          <li>
            <StyledStrong>Home</StyledStrong>
          </li>
          <li>
            <BsStars size={24} color={theme['Dark-Primary-Blue']} />
          </li>
        </StyledMenuUl>
      </nav>
    </header>
  )
}
