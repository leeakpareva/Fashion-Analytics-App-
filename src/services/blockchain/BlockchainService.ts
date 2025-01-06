import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';

export class BlockchainService {
  private web3: Web3;
  private contract: Contract | null = null;
  private contractAddress = process.env.VITE_CONTRACT_ADDRESS;

  constructor() {
    // Initialize Web3 with a provider
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  }

  async connect(): Promise<boolean> {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return true;
    } catch (error) {
      console.error('User denied account access');
      return false;
    }
  }

  async isConnected(): Promise<boolean> {
    const accounts = await this.web3.eth.getAccounts();
    return accounts.length > 0;
  }

  async getCurrentAddress(): Promise<string | null> {
    const accounts = await this.web3.eth.getAccounts();
    return accounts[0] || null;
  }

  // Issue a certificate on the blockchain
  async issueCertificate(studentAddress: string, courseId: string, completionDate: number): Promise<string> {
    const account = await this.getCurrentAddress();
    if (!account) throw new Error('No account connected');

    // Create certificate hash
    const certificateHash = this.web3.utils.soliditySha3(
      { t: 'address', v: studentAddress },
      { t: 'string', v: courseId },
      { t: 'uint256', v: completionDate }
    );

    // Issue certificate transaction
    const tx = await this.contract?.methods.issueCertificate(
      studentAddress,
      certificateHash
    ).send({ from: account });

    return tx.transactionHash;
  }

  // Verify a certificate on the blockchain
  async verifyCertificate(certificateHash: string): Promise<boolean> {
    return await this.contract?.methods.verifyCertificate(certificateHash).call();
  }
}

export const blockchainService = new BlockchainService();