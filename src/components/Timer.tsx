import React, { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal } from '@ionic/react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0.1 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          const newSeconds = seconds - 1;
          setProgress((newSeconds / (25 * 60)) * 100); // update progress based on remaining time
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (seconds === 0) {
      setIsActive(false)
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);



  const Start = () => {
    setIsActive(true);
  };

  const Pause = () => {
    setIsActive(false);
  };

  const Reset = () => {
    setSeconds(25 * 60);
    setProgress(0);
    setIsActive(false);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className='remaining-time'>{minutes}:{remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className='progress-bar-base' style={{ width: '100%', height: '20px', backgroundColor: '#ddd' }}>
          <div className='progress-bar-top' style={{ width: `${progress}%`, height: '100%', backgroundColor: '#0077c2' }}></div>
        </div>
        <div className='handle-buttons-container'>
          <IonButton className='handle-button' onClick={Start} color='success'>Start</IonButton>
          <IonButton className='handle-button' onClick={Pause} color='tertiary'>Pause</IonButton>
          <IonButton className='handle-button' onClick={Reset} color='warning'>Reset</IonButton>
        </div>

      </IonCardContent>
    </IonCard>


  );
};

export default Timer;
