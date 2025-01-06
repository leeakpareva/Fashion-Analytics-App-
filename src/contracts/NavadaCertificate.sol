// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NavadaCertificate {
    struct Certificate {
        bytes32 hash;
        uint256 timestamp;
        bool valid;
    }
    
    mapping(address => Certificate[]) public certificates;
    mapping(bytes32 => bool) public issuedCertificates;
    
    event CertificateIssued(address indexed student, bytes32 certificateHash);
    event CertificateRevoked(address indexed student, bytes32 certificateHash);
    
    function issueCertificate(address student, bytes32 certificateHash) public {
        require(!issuedCertificates[certificateHash], "Certificate already exists");
        
        certificates[student].push(Certificate({
            hash: certificateHash,
            timestamp: block.timestamp,
            valid: true
        }));
        
        issuedCertificates[certificateHash] = true;
        
        emit CertificateIssued(student, certificateHash);
    }
    
    function verifyCertificate(bytes32 certificateHash) public view returns (bool) {
        return issuedCertificates[certificateHash];
    }
    
    function revokeCertificate(address student, bytes32 certificateHash) public {
        require(issuedCertificates[certificateHash], "Certificate does not exist");
        
        Certificate[] storage studentCerts = certificates[student];
        for (uint i = 0; i < studentCerts.length; i++) {
            if (studentCerts[i].hash == certificateHash) {
                studentCerts[i].valid = false;
                break;
            }
        }
        
        issuedCertificates[certificateHash] = false;
        
        emit CertificateRevoked(student, certificateHash);
    }
    
    function getCertificates(address student) public view returns (Certificate[] memory) {
        return certificates[student];
    }
}