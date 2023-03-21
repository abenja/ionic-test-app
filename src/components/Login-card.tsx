import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';


import './Login-card.css';

function LoginCard() {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Login</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput type="text"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password"></IonInput>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
}
export default LoginCard;