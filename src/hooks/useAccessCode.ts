import { useState } from 'react';

export const useAccessCode = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>();

  const validateCode = (code: string) => {
    // In a real app, this would validate against an API
    if (code === '0000') {
      setIsLocked(false);
      setShowModal(false);
      setError(undefined);
    } else {
      setError('Invalid access code');
    }
  };

  return {
    isLocked,
    showModal,
    error,
    setShowModal,
    validateCode
  };
};

export default useAccessCode;