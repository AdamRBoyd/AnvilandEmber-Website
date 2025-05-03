import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Icon, Link, Spacer } from '../..';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  justify-content: center;
  justify-items: center;
  align-self: center;
  width: 95%;
  padding: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1.75fr;
    grid-template-rows: 1fr;
    padding-left: 2rem;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50%;
  align-self: center;
  justify-self: center;
  object-fit: cover;
  margin: 2rem 0 1rem;

  @media (min-width: 800px) {
    width: 95%;
    margin: 0 0 0 1rem;
  }
`;

const RightSideTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${font('primary')};
  padding: 2rem 1.5rem 1.5rem;
`;

const RightParagraph = styled.div`
  font-family: ${font('primary')};
  margin: 0.5rem 1rem;
  text-align: left;
`;

const InstagramBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
`;

const StyledIcon = styled(Icon)`
  color: ${palette('primary', 0)};
  font-size: 1.5rem;
`;

const InstagramLink = styled(Link)`
  color: ${palette('primary', 0)};
  cursor: pointer;
  font-family: ${font('primary')};
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  text-justify: center;
  margin-top: 1rem;
`;

const AboutMe = () => {
  return (
    <MainContainer>
      <ProfileImage src='/images/ProfilePic.png' />
      <RightSideTextBlock>
        <RightParagraph>
          Welcome to my portfolio website! I am a jewelry designer and
          silversmith with a passion for creating unique and meaningful pieces
          of jewelry.
        </RightParagraph>
        <RightParagraph>
          I am the founder of{' '}
          <Link href={'https://AdamBoydDesigns.etsy.com'} target='_blank'>
            {' AdamBoydDesigns on Etsy'}
          </Link>
          , where I sell my handcrafted silver and copper jewelry. I enjoy using
          my creativity and attention to detail to design and create beautiful
          and functional pieces of jewelry. From simple and elegant designs to
          more intricate and personalized pieces, I strive to create something
          that speaks to each individual wearer.
        </RightParagraph>
        <RightParagraph>
          In addition to my work in jewelry design, I also have a background in
          computers, fabrication, and graphic design. I recently graduated from
          California State University, East Bay with a Bachelor of Science in
          Computer Science and have experience in developing websites using
          HTML, CSS, JavaScript, React and Nodejs. Additionally I have
          experience with several programming languages including C++, Java,
          Python, and more.
        </RightParagraph>
        <RightParagraph>
          In the "Code" section of my website, you will find a link to my
          <Link
            href={'https://github.com/phoenix239/adamboyddesigns'}
            target='_blank'
          >
            {' GitHub '}
          </Link>
          profile, as well as many mini projects that I have developed using
          various programming languages and tools. I enjoy exploring new
          technologies and creating applications that are both functional and
          visually appealing.
        </RightParagraph>
        <RightParagraph>
          Whether I am creating jewelry or programming, I bring the same level
          of passion and attention to detail to everything I do. I am always
          looking for new opportunities to grow and learn in both fields, and I
          am excited to share my work with others. Thank you for visiting my
          portfolio website, and please feel free to
          <Link to='/contact'>{' contact me'}</Link> if you have any questions
          or if you are interested in working together.
        </RightParagraph>
        <Spacer padding={2} />
        <InstagramLink
          href='https://www.instagram.com/adamboyddesigns/'
          target='_blank'
        >
          <InstagramBlock>
            Follow me on Instagram!
            <StyledIcon name='instagram' icon='instagram' size={25} />
          </InstagramBlock>
        </InstagramLink>
      </RightSideTextBlock>
    </MainContainer>
  );
};

export default AboutMe;
