import { palette } from 'styled-theme';
import styled from 'styled-components';

import { Heading, Label } from '../..';

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0 1rem 1rem;
  width: 40%;
  min-width: 300px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  background-color: ${palette('primary', 3)};
  width: 100%;
  align-self: center;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0px 0px 5px 0px ${palette('grayscale', 4)};
`;

const HeaderLabel = styled(Label)`
  align-self: center;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0.5rem 0.5rem;
  align-self: center;
`;

const StyledLocation = styled(Label)`
  font-size: 0.8rem;
  margin: 0 0.5rem;
  align-self: center;
`;

const StyledIconLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  text-transform: capitalize;
  margin: 1rem 0 0.5rem -1rem; ;
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 0 2rem;
  border-bottom: 1px solid ${palette('grayscale', 5)};
  width: 90%;
`;

const StyledTemp = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StyledFeels = styled(Label)`
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
`;

const StyledMaxMin = styled(Label)`
  font-size: 0.8rem;
`;

const WeatherIcon = styled.img`
  max-width: 50px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 1.5rem 0 1rem;
  width: 90%;
`;

const StyledInfoLabel = styled(Label)`
  font-size: 0.8rem;
`;

const WeatherCard = ({ weather, tempCelsius, ...props }) => {
  // Kelvin to Fahrenheit T(K) × 9/5 - 459.67
  function fTemp(temp) {
    return Math.floor((temp * 9) / 5 - 459.67);
  }

  // Kelvin to Celsius T(K) - 273.15
  function cTemp(temp) {
    return Math.floor(temp - 273.15);
  }

  return (
    <MainCard>
      <StyledHeader>
        <HeaderLabel>Weather for:</HeaderLabel>
        <StyledHeading>{`${weather?.name}, ${weather?.sys?.country}`}</StyledHeading>
        <StyledLocation>{`${weather?.coord?.lat} Lat., ${weather?.coord?.lon} Lon.`}</StyledLocation>
      </StyledHeader>
      <StyledIconLabel>
        {weather?.weather?.at(0)?.icon !== undefined && (
          <WeatherIcon
            src={`http://openweathermap.org/img/w/${
              weather?.weather?.at(0)?.icon
            }.png`}
          />
        )}
        {`${weather?.weather?.at(0)?.description}`}
      </StyledIconLabel>
      <TempWrapper>
        <StyledTemp>
          {tempCelsius ? (
            <>{`${cTemp(weather?.main?.temp)}ºC`}</>
          ) : (
            <>{`${fTemp(weather?.main?.temp)}ºF`}</>
          )}
        </StyledTemp>
        <StyledFeels>
          {tempCelsius ? (
            <>{`Feels Like: ${cTemp(weather?.main?.feels_like)}ºC`}</>
          ) : (
            <>{`Feels Like: ${fTemp(weather?.main?.feels_like)}ºF`}</>
          )}
        </StyledFeels>
        {tempCelsius ? (
          <StyledMaxMin>{`Min: ${cTemp(
            weather?.main?.temp_min
          )}ºC, Max: ${cTemp(weather?.main?.temp_max)}ºC`}</StyledMaxMin>
        ) : (
          <StyledMaxMin>{`Min: ${fTemp(
            weather?.main?.temp_min
          )}ºF, Max: ${fTemp(weather?.main?.temp_max)}ºF`}</StyledMaxMin>
        )}
      </TempWrapper>
      <InfoWrapper>
        <StyledInfoLabel>{`Humidity: ${weather?.main?.humidity}%`}</StyledInfoLabel>
        <StyledInfoLabel>{`Pressure: ${weather?.main?.pressure}º`}</StyledInfoLabel>
        <StyledInfoLabel>{`Wind Speed: ${weather?.wind?.speed}km/h`}</StyledInfoLabel>
      </InfoWrapper>
    </MainCard>
  );
};

export default WeatherCard;
