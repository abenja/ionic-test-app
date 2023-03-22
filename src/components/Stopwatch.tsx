import React, { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
//uses the same styling as Timer.tsx
import './Timer.css';


const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        let interval: any = null;

        //Adds one second to the stopwatch when isActive is set to true
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => {
                    const newSeconds = seconds + 1;
                    return newSeconds;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    //Start function which is called when Start button is pressed.
    //The function sets setIsActive to true, which starts the stopwatch
    const Start = () => {
        setIsActive(true);
    };

    //Pause function which is called when Pause button is pressed. 
    //The function sets setIsActive to false, which stops the stopwatch

    const Pause = () => {
        setIsActive(false);
    };

    //Pause function which is called when Pause button is pressed.
    // The function sets setSeconds back to 0 and setIsActive to false, which stops the stopwatch

    const Reset = () => {
        setSeconds(0);
        setIsActive(false);
    };



    const minutes = Math.floor(seconds / 60);
    const secondsElapsed = seconds % 60;


    return (
        <div>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle className='remaining-time'>{minutes}:{secondsElapsed < 10 ? '0' + secondsElapsed : secondsElapsed}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className='handle-buttons-container'>
                        <IonButton className='handle-button' onClick={Start} color='success'>Start</IonButton>
                        <IonButton className='handle-button' onClick={Pause} color='tertiary'>Pause</IonButton>
                        <IonButton className='handle-button' onClick={Reset} color='warning'>Reset</IonButton>
                    </div>

                </IonCardContent>
            </IonCard>
        </div>


    );
};

export default Stopwatch;
