import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Timer from '../components/Timer';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pomodoro timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Timer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <Timer />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
