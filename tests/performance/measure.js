import { performance } from 'node:perf_hooks';

// Simple performance measurement script
async function measurePerformance() {
  console.log('Running performance tests...\n');

  // Measure module load time
  const startLoad = performance.now();
  await import('../../src/App.tsx');
  const loadTime = performance.now() - startLoad;
  
  console.log('Performance Results:');
  console.log('-----------------');
  console.log(`Module Load Time: ${loadTime.toFixed(2)}ms`);
  
  // Add memory usage info
  const memoryUsage = process.memoryUsage();
  console.log('\nMemory Usage:');
  console.log('-----------------');
  console.log(`Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`);
}

measurePerformance().catch(console.error);