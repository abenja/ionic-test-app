import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handlePlay = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(25 * 60);
    setIsActive(false);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>POMODORO TIMER</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel>
            {minutes}:{remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}
          </IonLabel>

        </IonItem>
        <IonItem>
          <IonButton onClick={handlePlay}>Play</IonButton>
          <IonButton onClick={handlePause}>Pause</IonButton>
          <IonButton onClick={handleReset}>Reset</IonButton>
        </IonItem>

      </IonCardContent>

    </IonCard>
  );
};

export default Timer;
