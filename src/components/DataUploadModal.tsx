import { useState, useRef } from 'react';
import { Upload, FileText, AlertCircle, Check } from 'lucide-react';

interface DataUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function DataUploadModal({ isOpen, onClose, onComplete }: DataUploadModalProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (files: FileList) => {
    if (files.length === 0) return;

    const file = files[0];
    if (!file.name.endsWith('.csv')) {
      setErrorMessage('Please upload a CSV file');
      setUploadStatus('error');
      return;
    }

    setUploadStatus('uploading');
    
    // Simulate file upload
    setTimeout(() => {
      setUploadStatus('success');
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-100 rounded-lg">
                <Upload className="h-5 w-5 text-black" />
              </div>
              <h2 className="text-lg font-semibold text-black">Upload Data</h2>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-black transition-colors"
            >
              Close
            </button>
          </div>

          <div
            className={`border-2 border-dashed rounded-lg transition-all ${
              dragActive ? 'border-black bg-zinc-50' : 'border-zinc-200'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="p-8">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                className="hidden"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
              />
              
              <div className="text-center">
                {uploadStatus === 'idle' && (
                  <>
                    <FileText className="h-8 w-8 text-zinc-400 mx-auto mb-4" />
                    <h3 className="font-medium text-black mb-2">
                      Drop your CSV file here
                    </h3>
                    <p className="text-sm text-zinc-500 mb-4">
                      or click to browse from your computer
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      Select File
                    </button>
                  </>
                )}

                {uploadStatus === 'uploading' && (
                  <div className="space-y-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-zinc-300 border-t-black mx-auto" />
                    <p className="text-zinc-600">Uploading your data...</p>
                  </div>
                )}

                {uploadStatus === 'success' && (
                  <div className="space-y-3">
                    <Check className="h-8 w-8 text-green-500 mx-auto" />
                    <p className="text-green-600">Upload successful!</p>
                  </div>
                )}

                {uploadStatus === 'error' && (
                  <div className="space-y-3">
                    <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
                    <p className="text-red-600">{errorMessage}</p>
                    <button
                      onClick={() => {
                        setUploadStatus('idle');
                        setErrorMessage('');
                      }}
                      className="text-sm text-black hover:underline"
                    >
                      Try again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}