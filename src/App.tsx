import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Home from './pages/Home';
import Create from "./pages/Create";

/* Core CSS required for Ionic component.tsx to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import styled from "styled-components";


setupIonicReact();

const StyledIonApp = styled(IonApp)`
  --ion-background-color: none;
  --background: none;
  background: linear-gradient(to bottom, #FBF3F4, #B8D0E8);
`;


const App: React.FC = () => (
  <StyledIonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </StyledIonApp>
);

export default App;
