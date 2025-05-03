import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';

import PageTemplate from './templates/PageTemplate/default';
import theme from './themes/default';

const About = lazy(() => import('./pages/About'));
const Code = lazy(() => import('./pages/Code'));
const CodeDictionary = lazy(() => import('./pages/CodeDictionary'));
const CodeGradient = lazy(() => import('./pages/CodeGradient'));
const CodePasswordGen = lazy(() => import('./pages/CodePasswordGen'));
const CodeRecipeBook = lazy(() => import('./pages/CodeRecipeBook'));
const CodeRecipeCard = lazy(() => import('./pages/CodeRecipeCard'));
const CodeTicTacToe = lazy(() => import('./pages/CodeTicTacToe'));
const CodeTipCalc = lazy(() => import('./pages/CodeTipCalc'));
const CodeToDo = lazy(() => import('./pages/CodeToDo'));
const CodeUnitConverter = lazy(() => import('./pages/CodeUnitConverter'));
const CodeWeather = lazy(() => import('./pages/CodeWeather'));
const CodeWorkout = lazy(() => import('./pages/CodeWorkout'));
const CodeCalculator = lazy(() => import('./pages/CodeCalculator'));
const CodeTaskLog = lazy(() => import('./pages/CodeTaskLog'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const GalleryImages = lazy(() => import('./pages/GalleryImages'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LoadingPage = lazy(() => import('./pages/LoadingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Shop = lazy(() => import('./pages/Shop'));
const ShopListing = lazy(() => import('./pages/ShopListing'));
const Test = lazy(() => import('./pages/Test'));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <PageTemplate>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<LoadingPage />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='about'
            element={
              <Suspense fallback={<LoadingPage />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='contact'
            element={
              <Suspense fallback={<LoadingPage />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='code'
            element={
              <Suspense fallback={<LoadingPage />}>
                <Code />
              </Suspense>
            }
          />
          <Route
            path='code/dictionary'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeDictionary />
              </Suspense>
            }
          />
          <Route
            path='code/gradient'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeGradient />
              </Suspense>
            }
          />
          <Route
            path='code/passwordgen'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodePasswordGen />
              </Suspense>
            }
          />
          <Route
            path='code/recipe'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeRecipeBook />
              </Suspense>
            }
          />
          <Route
            path='code/recipe/:card'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeRecipeCard />
              </Suspense>
            }
          />
          <Route
            path='code/tictactoe'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeTicTacToe />
              </Suspense>
            }
          />
          <Route
            path='code/tipcalc'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeTipCalc />
              </Suspense>
            }
          />
          <Route
            path='code/todo'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeToDo />
              </Suspense>
            }
          />
          <Route
            path='code/units'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeUnitConverter />
              </Suspense>
            }
          />
          <Route
            path='code/weather'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeWeather />
              </Suspense>
            }
          />
          <Route
            path='code/workout'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeWorkout />
              </Suspense>
            }
          />
          <Route
            path='code/calculator'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeCalculator />
              </Suspense>
            }
          />
          <Route
            path='code/tasklog'
            element={
              <Suspense fallback={<LoadingPage />}>
                <CodeTaskLog />
              </Suspense>
            }
          />
          <Route
            path='gallery'
            element={
              <Suspense fallback={<LoadingPage />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path='gallery/:category'
            element={
              <Suspense fallback={<LoadingPage />}>
                <GalleryImages />
              </Suspense>
            }
          />
          <Route path='shop' element={<Navigate to='all' />} />
          <Route
            path='shop/:category'
            element={
              <Suspense fallback={<LoadingPage />}>
                <Shop />
              </Suspense>
            }
          />
          <Route
            path='shop/:category/:listing'
            element={
              <Suspense fallback={<LoadingPage />}>
                <ShopListing />
              </Suspense>
            }
          />
          <Route
            path='test'
            element={
              <Suspense fallback={<LoadingPage />}>
                <Test />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<LoadingPage />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </PageTemplate>
    </ThemeProvider>
  );
}

export default App;
