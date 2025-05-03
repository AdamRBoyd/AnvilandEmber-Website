import { font, palette } from 'styled-theme';
import { useState } from 'react';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';

import {
  Button,
  DictionaryMeaningCard,
  HorizontalRule,
  Icon,
  Input,
  Label,
  Link,
  PageTitleFrame,
  Spacer,
} from '../..';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  margin: 1rem 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette('primary', 3)};
  border-radius: 0.5rem;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  border-color: transparent;
  border: none;
  margin-left: 0.8rem;
`;

const CloseIcon = styled(Icon)`
  position: relative;
  right: 9px;
  top: -1px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  padding: 0 1rem;
`;

const StyledError = styled(Label)`
  color: ${palette('danger', 3)};
  font-size: 1.5rem;
  margin: 2rem 0 0;
`;

const DefinitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`;

const WordPhoneticTitle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  margin: 1.5rem 2rem;
`;

const StyledPhonetic = styled.div`
  margin: 0 0 0.5rem 2rem;
  font-size: 1.5rem;
`;

const WordTitle = styled.div`
  padding-left: 2rem;
  font-size: 3rem;
  text-transform: capitalize;
`;

const LinkCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;
  width: fit-content;
  &:hover {
    box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  }
`;

const StyledLinks = styled(Link)`
  padding: 0.2rem;
  width: fit-content;
`;

const APICredit = styled(Link)`
  font-size: 0.8rem;
  margin: 0 0 2rem;
`;

const CodeDictionary = () => {
  const [word, setWord] = useState('');
  const [url, setUrl] = useState('');
  const { data, loading } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  };

  return (
    <PageTitleFrame title='Dictionary API Fetch Project' noBottomRule>
      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <StyledInput
            type='text'
            id='searchBox'
            onChange={(e) => setWord(e.target.value)}
            value={word}
            required
            placeholder='Search Here'
          />
          <CloseIcon
            name='close'
            icon='close'
            size={13}
            onClick={() => setWord('')}
          />
        </InputGroup>
        <StyledButton type='submit' value='Submit' variant='primary'>
          Search
        </StyledButton>
      </StyledForm>
      <HorizontalRule />
      <DefinitionWrapper>
        {!loading && (
          <>
            {data?.title ? (
              <>
                <StyledError>{data.title}</StyledError>
                <div>{data.message}</div>
                <div>{data.resolution}</div>
              </>
            ) : (
              <>
                {data?.at(0)?.word && (
                  <>
                    <WordPhoneticTitle>
                      <WordTitle>{`${data?.at(0)?.word}`}</WordTitle>
                      <StyledPhonetic>
                        {data?.at(0)?.phonetic ? (
                          <>{`${data?.at(0)?.phonetic}`}</>
                        ) : (
                          ''
                        )}
                      </StyledPhonetic>
                    </WordPhoneticTitle>
                    {data?.at(0)?.meanings.map((meaning, index) => (
                      <DictionaryMeaningCard
                        meaning={meaning}
                        word={data?.at(0)?.word}
                        key={index}
                      />
                    ))}
                    <Spacer padding={1} />
                    <LinkCard>
                      <Label>Source:</Label>
                      {data?.at(0)?.sourceUrls.map((url, index) => (
                        <StyledLinks href={url} target='_blank' key={index}>
                          <div>{`${url}`}</div>
                        </StyledLinks>
                      ))}
                    </LinkCard>
                  </>
                )}
              </>
            )}
          </>
        )}
      </DefinitionWrapper>
      <Spacer padding={2} />
      <APICredit href={'https://dictionaryapi.dev/'} target='_blank'>
        Dictionary API courtesy of Dictionary API
      </APICredit>
    </PageTitleFrame>
  );
};

export default CodeDictionary;
