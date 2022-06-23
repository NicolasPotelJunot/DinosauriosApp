import { dinosaurios } from '../data/dinosaurs'

export const getDinoById = (id="") => {

  return dinosaurios.find( dino => dino.id === id)
  
}
