import React, { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonLabel, IonModal } from '@ionic/react';
import './Timer.css';

//function to get start time. I wanted to add user's selection as the starging point, but ran out of time.
//The starting time could be easily declared
// in the state variable:   "const [seconds, setSeconds] = useState(startTime);", but I will keep it as it is for future use.
function getStartTime() {
  //start time is 25 seconds * 60 = 1500 seconds
  const chosenStartTime = 25 * 60;
  return chosenStartTime;
}

const Timer = () => {
  const startTime = getStartTime();

  // Declaring state variables. isActive is set to false by default, otherwise the timer would start counting down as soon as the page is loaded
  // Also openModal is set to false, otherwise the modal would be open from the beginning
  const [seconds, setSeconds] = useState(startTime);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(100);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let interval: any = null;

    //happens if isActive is true, meaning that the timer is counting down
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          const newSeconds = seconds - 1;
          // update progress bar based on remaining time
          setProgress((newSeconds / (25 * 60)) * 100);
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    // When timer reaches zero, setIsActive is set to false. Without this, the timer would continue counting with negative numbers.
    // Additionally, the modal is opened with the setModalOpen() function, with openModal set to true.
    if (seconds === 0) {
      setIsActive(false)
      setOpenModal(true)
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);


//Start function which is called when Start button is pressed. The function sets setIsActive to true, which starts the countdown
  const Start = () => {
    setIsActive(true);
  };

 //Pause function which is called when Pause button is pressed. The function sets setIsActive to false, which stops the countdown

  const Pause = () => {
    setIsActive(false);
  };

  //Pause function which is called when Pause button is pressed. The function sets setSeconds as per the startTime, setProgress back to full (100), and setIsActive to false, which stops the countdown
  const Reset = () => {
    setSeconds(startTime);
    setProgress(100);
    setIsActive(false);
  };

  // Closing the modal sets setOpenModal to false which closes the modal. It also sets setSeconds to 5 minutes (=300s) and starts the countdown by setting setIsActive to true.
  const closeModal = () => {
    setOpenModal(false);
    setSeconds(5 * 60);
    setIsActive(true);
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Determines how the actual elements are displayed on screen, using Ionic UI components
  return (
    <div>
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
      <IonModal initialBreakpoint={.5} isOpen={openModal} onDidDismiss={closeModal}>
        <IonLabel>
          Well done!
        </IonLabel>
        <IonButton className='close-modal-button' onClick={closeModal} color='primary'>Start break</IonButton>
      </IonModal>
    </div>


  );
};

export default Timer;
