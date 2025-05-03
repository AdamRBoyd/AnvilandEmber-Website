import { palette } from 'styled-theme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Heading,
  HorizontalRule,
  Icon,
  Input,
  Label,
  Link,
  PageTitleFrame,
  Spacer,
} from '../..';
import useFetch from '../../../hooks/useFetch';

const IMAGE_HEIGHT = '150px';
const IMAGE_WIDTH = '200px';
const CARD_WIDTH = '250px';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;
`;

const StyledHeading = styled(Heading)`
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const RecipeLinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${CARD_WIDTH};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const ErrorSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
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
  border: none;
  margin-left: 0.8rem;
`;

const CloseIcon = styled(Icon)`
  position: relative;
  right: 9px;
  top: -1px;
  margin: 0 0.2rem 0 1rem;
  cursor: pointer;
`;

const StyledButton = styled(Button)``;

const StyledImage = styled.img`
  border-radius: 0.25rem;
  width: 90%;
  margin-bottom: 0.5rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const LabelWrapper = styled(Label)`
  color: ${palette('primary', 0)};
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;

const APICredit = styled(Link)`
  font-size: 0.8rem;
  margin: 1rem;
`;

const CodeRecipeBook = () => {
  const [recipeList, setRecipeList] = useState();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('recipeSearch') || ''
  );
  const [searchChanged, setSearchChanged] = useState(false);
  const [url, setUrl] = useState('');

  const { data, loading } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  const fetchRecipes = () => {
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
  };

  useEffect(() => {
    if (!loading) {
      setRecipeList(data?.meals);
      setRecipeTitle(searchTerm);
      setSearchChanged(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  // If a local search term exists, fetch the recipes on page load
  useEffect(() => {
    if (searchTerm !== '') {
      fetchRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If the search term has changed, set the localStorage
  // and set the searchChanged state to true
  useEffect(() => {
    localStorage.setItem('recipeSearch', searchTerm);
    setSearchChanged(true);
  }, [searchTerm]);

  return (
    <PageTitleFrame title='Recipe Book Search' noBottomRule>
      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <StyledInput
            type='text'
            id='searchBox'
            placeholder='Search Here'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            required
          />
          <CloseIcon
            name='close'
            icon='close'
            size={13}
            onClick={() => {
              setSearchTerm('');
            }}
          />
        </InputGroup>
        <StyledButton type='submit' value='Submit' variant='primary'>
          Search Recipes
        </StyledButton>
      </StyledForm>
      <HorizontalRule />
      <MainWrapper>
        {recipeList ? (
          <>
            <StyledHeading>{`Search Results for: ${recipeTitle}`}</StyledHeading>
            <ResultWrapper>
              {recipeList?.map((recipe, index) => (
                <RecipeLinkWrapper
                  key={index}
                  id={recipe.idMeal}
                  to={recipe.idMeal}
                  state={{ recipe }}
                >
                  <StyledImage src={recipe.strMealThumb} />
                  <LabelWrapper>{recipe.strMeal}</LabelWrapper>
                  {`Recipe ID: ${recipe.idMeal}`}
                </RecipeLinkWrapper>
              ))}
            </ResultWrapper>
          </>
        ) : (
          <ErrorSearch>
            {searchTerm === '' || searchChanged ? (
              <Label>Please Enter a Recipe to Search</Label>
            ) : (
              <Label>{`Sorry, a recipe for '${searchTerm}' was not found...`}</Label>
            )}
          </ErrorSearch>
        )}
      </MainWrapper>
      <APICredit href={'https://www.themealdb.com/'} target='_blank'>
        API and Recipes courtesy of TheMealDB
      </APICredit>
      <Spacer padding={3} />
    </PageTitleFrame>
  );
};

export default CodeRecipeBook;
