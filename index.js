// Simple worker that calls Joe every 5 seconds
const INTERVAL_SECONDS = parseInt(process.env.INTERVAL_SECONDS || '5');
const ENDPOINT_URL = process.env.ENDPOINT_URL;

console.log(`🚂 Railway Worker Started!`);
console.log(`   Calling: ${ENDPOINT_URL}`);
console.log(`   Every: ${INTERVAL_SECONDS} seconds`);

async function callJoe() {
  try {
    console.log(`⏰ Calling Joe at ${new Date().toISOString()}`);
    const response = await fetch(ENDPOINT_URL, { method: 'POST' });
    const data = await response.json();
    console.log(`✅ Response:`, data);
  } catch (error) {
    console.error(`❌ Error:`, error.message);
  }
}

// Run immediately
callJoe();

// Then run every X seconds
setInterval(callJoe, INTERVAL_SECONDS * 1000);
