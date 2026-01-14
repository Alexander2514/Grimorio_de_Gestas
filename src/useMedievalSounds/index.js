import { useCallback } from 'react';

function useMedievalSounds() {
  const playSound = useCallback((type) => {
    let audioPath = '';

    // Mapeamos el tipo de acción al archivo correspondiente
    switch (type) {
      case 'stamp':
        audioPath = '/sounds/stamp.mp3'; // Efecto para el Check
        break;
      case 'scroll':
        audioPath = '/sounds/delete.mp3'; // Efecto para el Delete
        break;
      case 'click':
        audioPath = '/sounds/add_sword.mp3'; // Efecto para el botón de Agregar
        break;
      default:
        return;
    }

    const audio = new Audio(process.env.PUBLIC_URL + audioPath);
    audio.volume = 0.4; // Volumen moderado para no saturar
    audio.play().catch(err => console.log("Error al reproducir audio:", err));
  }, []);

  return { playSound };
}

export { useMedievalSounds };