import { IonCard, IonContent, IonHeader, IonItem, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Timer from '../components/Timer';

import './Timerpage.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" slot='start'>Timer</IonTitle>
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
