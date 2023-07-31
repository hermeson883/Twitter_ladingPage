import { StyledDiv } from './index.ts'
import { LeftSideBar } from './sideBar/LeftSideBar.tsx'
import { CenterSideBar } from './centerBar/CenterSideBar.tsx'
export function Page() {
  return (
    <StyledDiv>
      <LeftSideBar />
      <CenterSideBar />
    </StyledDiv>
  )
}
