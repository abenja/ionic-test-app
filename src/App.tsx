import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addSharp, home, settingsSharp, statsChart, stopwatch } from 'ionicons/icons';
import Login from './pages/Login'; 
import Tab1 from './pages/Timerpage';
import Tab2 from './pages/Stopwatchpage';
import Tab4 from './pages/Settingspage';


/* Core CSS required for Ionic components to work properly */
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
import { settings } from 'cluster';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/" component={Login} />

        <Route exact path="/App">
          <Tab1 />
        </Route>
          <Route exact path="/Timerpage.tsx">
            <Tab1 />
          </Route>
          <Route exact path="/Stopwatchpage.tsx">
            <Tab2 />
          </Route>
          <Route exact path="/Settingspage.tsx">
            <Tab4 />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="timer" href="/Timerpage.tsx">
            <IonIcon icon={home} />
            <IonLabel>Timer</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stopwatch" href="/Stopwatchpage.tsx">
            <IonIcon icon={stopwatch} />
            <IonLabel>Stopwatch</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/Settingspage.tsx">
            <IonIcon icon={settingsSharp} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
