import { IonCard, IonContent, IonHeader, IonItem, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Timer from '../components/Timer';

import './Tab1.css';

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
        <IonModal trigger='open-modal' initialBreakpoint={.5} breakpoints={[0, .25, .5, .75]}>
                    <IonContent className='ion-padding'>
                        <IonItem lines='none'>
                        </IonItem>
                    </IonContent>
                </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
