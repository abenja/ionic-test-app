import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import LoginCard from '../components/Login-card';
import './Login.css';


const Login: React.FC = () => {
    const navigation = useIonRouter()

    const doLogin = () => {
        navigation.push('/Timerpage.tsx', 'root', 'replace')
    }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <LoginCard />
        <div className='login-button'>
        <IonButton onClick={() => doLogin()}>Login</IonButton>
        <IonButton href='./Timerpage.tsx' color='medium'>Skip</IonButton>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
