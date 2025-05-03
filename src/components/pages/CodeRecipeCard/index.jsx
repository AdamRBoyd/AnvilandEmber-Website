import { font, palette } from 'styled-theme';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, Link, PageTitleFrame, Spacer } from '../..';

const IMAGE_HEIGHT = '450px';
const IMAGE_WIDTH = '600px';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  margin: 2rem;
  border-radius: 10px;
  width: 70%;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const StyledImage = styled.img`
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const IngredientLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  border-bottom: 1px dotted ${palette('grayscale', 0)};
  width: 40%;
  padding: 0.2rem;
`;

const Ingredient = styled.div`
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
`;

const Measure = styled.div`
  font-family: ${font('primary')};
`;

const Instructions = styled.ul`
  width: 70%;
  font-family: ${font('primary')};
  padding: 0.5rem;
`;

const InstructionLine = styled.li`
  padding: 0.1rem;
`;

const Source = styled(Link)`
  font-size: 0.9rem;
  font-family: ${font('primary')};
`;

const Tags = styled.div`
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 0.7rem;
`;

const Youtube = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const YoutubeIcon = styled(Icon)`
  margin-left: 0.5rem;
`;

const CodeRecipeCard = () => {
  const [recipe, setRecipe] = useState();
  const [ingredientIndex, setIngredientIndex] = useState({});

  const { state } = useLocation();

  function createIngredientIndex() {
    let index = [{}];
    for (let i = 1; i < 21; i++) {
      index.push({
        ingredient: `strIngredient${i}`,
        measure: `strMeasure${i}`,
      });
    }
    setIngredientIndex(index);
  }

  useEffect(() => {
    setRecipe(state.recipe);
    createIngredientIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTitleFrame title={`${recipe?.strMeal}`} noBottomRule>
      <MainWrapper>
        <StyledImage src={recipe?.strMealThumb} alt='Recipe' />
        <Spacer padding={2} />
        {recipe?.strIngredient1 &&
          ingredientIndex.map((ingredient, index) =>
            recipe?.[ingredient.ingredient] !== '' &&
            recipe?.[ingredient.ingredient] !== null ? (
              <IngredientLine key={`IL${index}`}>
                <Ingredient key={`I${index}`}>
                  {recipe?.[ingredient.ingredient]}
                </Ingredient>
                <Measure key={`M${index}`}>
                  {recipe?.[ingredient.measure]}
                </Measure>
              </IngredientLine>
            ) : (
              ''
            )
          )}
        <Spacer padding={1} />
        <Instructions>
          {recipe?.strInstructions.split('\n').map((line, index) => (
            <InstructionLine key={index}>{line}</InstructionLine>
          ))}
        </Instructions>
        <Spacer padding={1} />
        <Tags>{`Tags: ${recipe?.strTags},${recipe?.strArea},${recipe?.strCategory}`}</Tags>
        <Spacer padding={2} />
        {recipe?.strYoutube && (
          <>
            <Youtube href={recipe?.strYoutube} target='_blank'>
              Watch on Youtube
              <YoutubeIcon name='Youtube' icon='youtube' size={35} />
            </Youtube>
            <Spacer padding={1} />
          </>
        )}
        {recipe?.strSource && (
          <Source href={recipe?.strSource} target='_blank'>
            Source
          </Source>
        )}
      </MainWrapper>
    </PageTitleFrame>
  );
};

export default CodeRecipeCard;
