import { IonButton, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Settingspage.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton color='danger' href='./'>Log out</IonButton>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
