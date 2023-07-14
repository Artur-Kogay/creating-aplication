import { Dispatch, SetStateAction } from 'react';


export interface ModalVideoProps {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
  recordedVideoURL: string | undefined;
  setRecordedVideoURL: React.Dispatch<SetStateAction<string | undefined>>;
  step: number;
  nextStep: React.Dispatch<SetStateAction<number>>;
}
