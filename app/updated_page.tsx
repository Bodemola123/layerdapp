'use client'
import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const { address, isConnected } = useAccount();  // Get wallet address and connection status
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isConnected && address) {
      fetchTransactionHistory(address);
    }
  }, [isConnected, address]);

  // Function to fetch transaction history from Etherscan
  const fetchTransactionHistory = async (walletAddress) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=JPDZWCPFPI8UAC7JB69S6SNME2VEJTIJKS`
      );
      const data = await response.json();

      if (data.status === '1') {
        setTransactions(data.result);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch transaction history');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <ConnectButton label="Connect" />
      </div>

      {loading && <p>Loading transaction history...</p>}
      {error && <p>Error: {error}</p>}

      {transactions.length > 0 && (
        <div>
          <h3>Transaction History:</h3>
          <ul>
            {transactions.map((tx, index) => (
              <li key={index}>
                <p>Hash: {tx.hash}</p>
                <p>Block Number: {tx.blockNumber}</p>
                <p>Value: {tx.value} wei</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
