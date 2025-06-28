import { useState } from 'react';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'warning';
  isVisible: boolean;
}

export function useToast() {
  const [toast, setToast] = useState<Toast>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showToast = (message: string, type: 'success' | 'error' | 'warning' = 'success') => {
    setToast({
      message,
      type,
      isVisible: true,
    });
  };

  const hideToast = () => {
    setToast(prev => ({
      ...prev,
      isVisible: false,
    }));
  };

  return {
    toast,
    showToast,
    hideToast,
  };
}