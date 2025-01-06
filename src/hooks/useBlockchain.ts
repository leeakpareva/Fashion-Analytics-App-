import { useState, useEffect } from 'react';
import { blockchainService } from '../services/blockchain/BlockchainService';

export const useBlockchain = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const connected = await blockchainService.isConnected();
      setIsConnected(connected);
      if (connected) {
        const addr = await blockchainService.getCurrentAddress();
        setAddress(addr);
      }
    } catch (err) {
      setError('Failed to check blockchain connection');
    }
  };

  const connect = async () => {
    try {
      const success = await blockchainService.connect();
      if (success) {
        setIsConnected(true);
        const addr = await blockchainService.getCurrentAddress();
        setAddress(addr);
      }
    } catch (err) {
      setError('Failed to connect to blockchain');
    }
  };

  return {
    isConnected,
    address,
    error,
    connect
  };
};