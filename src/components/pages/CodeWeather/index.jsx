import { palette } from 'styled-theme';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useFetch from '../../../hooks/useFetch';

import apiKeys from '../../../json/apiKeys.json';

import {
  Button,
  Input,
  Label,
  Link,
  PageTitleFrame,
  Spacer,
  WeatherCard,
} from '../..';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.7rem 0;
  width: 30%;
  min-width: 220px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 1.5rem 0;
  gap: 0.7rem;
`;

const ControlStyles = css`
  width: 80%;
`;

const StyledSwapButton = styled(Button)`
  ${ControlStyles}
`;

const StyledLoadByLocation = styled(Button)`
  ${ControlStyles}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  padding: 1.5rem 0 1.5rem;
  width: 90%;
`;

const StyledInput = styled(Input)`
  ${ControlStyles}
  border-radius: 0.5rem;
`;

const StyledFormButton = styled(Button)`
  ${ControlStyles}
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const APICredit = styled(Link)`
  font-size: 0.8rem;
  margin: 0.3rem;
`;

const CodeWeather = () => {
  const [weather, setWeather] = useState();
  const [tempCelsius, setTempCelsius] = useState(false);
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('ip');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const appId = apiKeys.codeWeather.appid;

  const { data, loading } = useFetch(url);

  useEffect(() => {
    if (!loading) {
      var latitude;
      var longitude;
      switch (method) {
        case 'ip':
          latitude = data?.latitude;
          longitude = data?.longitude;
          break;
        case 'city':
          latitude = data?.[0]?.lat;
          longitude = data?.[0]?.lon;
          break;
        case 'zip':
          latitude = data?.lat;
          longitude = data?.lon;
          break;
        default:
          break;
      }
      if (latitude && longitude) {
        setUrl(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`
        );
      }
    }
    if (data?.cod === 200) {
      setWeather(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  // NOTE: Less accurate location fetch method
  function handleIPLocationSearch() {
    setMethod('ip');
    setUrl(`https://ipapi.co/json/`);
  }

  // NOTE: Requires HTTPS and Certificate
  // function handleIPLocationSearch() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setUrl(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${appId}`
  //       );
  //     });
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // }

  const handleCitySearch = (e) => {
    e.preventDefault();
    setMethod('city');
    setUrl(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=100&appid=${appId}`
    );
  };

  const handleZipSearch = (e) => {
    e.preventDefault();
    setMethod('zip');
    setUrl(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${appId}`
    );
  };

  useEffect(() => {
    handleIPLocationSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTitleFrame title='Weather App Project' noBottomRule>
      <MainWrapper>
        {loading ? (
          <Label>Loading...</Label>
        ) : (
          <>
            {data?.cod === '404' && (
              <ErrorWrapper>
                <Label>OOPS! Something went wrong!</Label>
                <Label>Please enter a valid location</Label>
              </ErrorWrapper>
            )}
            {weather?.cod === 200 && data?.cod !== '404' && (
              <WeatherCard weather={weather} tempCelsius={tempCelsius} />
            )}
          </>
        )}
        <ControlWrapper>
          <StyledForm onSubmit={handleCitySearch}>
            <StyledInput
              type='text'
              id='city'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <StyledInput
              type='text'
              id='state'
              placeholder='State Code'
              maxLength='2'
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
            <StyledInput
              type='text'
              id='country'
              placeholder='Country Code'
              maxLength='2'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <StyledFormButton variant='primary'>Search</StyledFormButton>
          </StyledForm>
          <StyledForm onSubmit={handleZipSearch}>
            <StyledInput
              type='text'
              placeholder='Zip Code'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <StyledFormButton variant='primary'>Search</StyledFormButton>
          </StyledForm>
          <ButtonWrapper>
            <StyledLoadByLocation
              onClick={() => handleIPLocationSearch()}
              variant='primary'
            >
              Load By Location
            </StyledLoadByLocation>
            <StyledSwapButton
              onClick={() => setTempCelsius(!tempCelsius)}
              variant='ghost'
            >
              {tempCelsius ? 'Show in Fahrenheit' : 'Show in Celsius'}
            </StyledSwapButton>
          </ButtonWrapper>
        </ControlWrapper>
      </MainWrapper>
      <Spacer padding={1} />
      <APICredit href={'https://ipapi.co/'} target='_blank'>
        Location API courtesy of ipapi (If your location isn't right, I blame
        them.)
      </APICredit>
      <APICredit href={'https://openweathermap.org/'} target='_blank'>
        Weather API courtesy of OpenWeather
      </APICredit>
      <Spacer padding={2} />
    </PageTitleFrame>
  );
};

export default CodeWeather;
