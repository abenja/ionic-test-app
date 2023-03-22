import { IonCard, IonContent, IonDatetime, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Stopwatch from '../components/Stopwatch';
import './Stopwatchpage.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stopwatch</IonTitle>
          </IonToolbar>
        </IonHeader>
    <IonCard>
      <Stopwatch />
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
