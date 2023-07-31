import { FaTwitter, FaHome } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import {
  CiUser,
  CiCircleMore,
  CiMail,
  CiViewList,
  CiHashtag,
} from 'react-icons/ci'
import { FiMoreHorizontal } from 'react-icons/fi'
import {
  StyledLeftDiv,
  StyledA,
  StyledButtonTweet,
  StyledProfile,
  StyledUserP,
  StyledP,
} from './LeftSideBar.ts'
import { theme } from '../../../defaultThemes'

export function LeftSideBar() {
  return (
    <div>
      <StyledLeftDiv>
        <div>
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
                <CiHashtag size={28.4} />
                Explore
              </StyledA>
            </li>
            <li>
              <StyledA href="#">
                <CiMail size={28.4} />
                Messages
              </StyledA>
            </li>
            <li>
              <StyledA href="#">
                <BsBookmark size={28.4} />
                Bookmark
              </StyledA>
            </li>
            <li>
              <StyledA href="#">
                <CiViewList size={28.4} />
                List
              </StyledA>
            </li>
            <li>
              <StyledA href="#">
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
        </div>
      </StyledLeftDiv>
      <StyledProfile>
        <StyledA>
          <img
            src="https://avatars.githubusercontent.com/u/72263429?s=400&u=40bcc48d6b0edb21dc726fc26e5be003f3f93ac6&v=4"
            alt=""
            width={'39px'}
            style={{ borderRadius: ' 99999px' }}
          />
          <div>
            <StyledP>Hermeson</StyledP>
            <StyledUserP>@hermeson833</StyledUserP>
          </div>

          <FiMoreHorizontal />
        </StyledA>
      </StyledProfile>
    </div>
  )
}
