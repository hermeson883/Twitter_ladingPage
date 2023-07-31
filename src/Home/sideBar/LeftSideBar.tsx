import { FaTwitter, FaHome } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import {
  CiUser,
  CiCircleMore,
  CiMail,
  CiViewList,
  CiHashtag,
} from 'react-icons/ci'
import { StyledLeftDiv, StyledA, StyledButtonTweet } from './LeftSideBar.ts'
import { theme } from '../../../defaultThemes'

export function LeftSideBar() {
  return (
    <StyledLeftDiv>
      <ul>
        <li>
          <FaTwitter size={28.4} color={theme['Primary-Blue']} />
        </li>
        <li>
          <StyledA href="#">
            <FaHome size={28.4} />
            Home
          </StyledA>
        </li>
        <li>
          <StyledA href="#">
            {' '}
            <CiHashtag size={28.4} />
            Explore
          </StyledA>
        </li>
        <li>
          <StyledA href="#">
            {' '}
            <CiMail size={28.4} />
            Messages
          </StyledA>
        </li>
        <li>
          <StyledA href="#">
            {' '}
            <BsBookmark size={28.4} />
            Bookmark
          </StyledA>
        </li>
        <li>
          <StyledA href="#">
            {' '}
            <CiViewList size={28.4} />
            List
          </StyledA>
        </li>
        <li>
          <StyledA href="#">
            {' '}
            <CiUser size={28.4} />
            Profile
          </StyledA>
        </li>
        <li>
          <StyledA href="#">
            <CiCircleMore size={28.4} />
            More
          </StyledA>
        </li>
        <div style={{ marginTop: '2rem' }}>
          <StyledButtonTweet href="#">Tweet</StyledButtonTweet>
        </div>
      </ul>
    </StyledLeftDiv>
  )
}
