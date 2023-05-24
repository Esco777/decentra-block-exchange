async function main() {
  console.log(`Preparing deployment...\n`)

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory('Token')
  const Exchange = await ethers.getContractFactory('Exchange')

  // Fetch accounts
  const accounts = await ethers.getSigners()

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

  // Deploy contract
  const dcb = await Token.deploy('Decentra Block', 'DCB', '1000000')
  await dcb.deployed()
  console.log(`DCB Deployed to: ${dcb.address}`)

  const mETH = await Token.deploy('mETH', 'mETH', '1000000')
  await mETH.deployed()
  console.log(`mETH Deployed to: ${mETH.address}`)

  const mDAI = await Token.deploy('mDAI', 'mDAI', '1000000')
  await mDAI.deployed()
  console.log(`mDAI Deployed to: ${mDAI.address}`)

  const mLINK = await Token.deploy('mLINK', 'mLINK', '1000000')
  await mLINK.deployed()
  console.log(`mLINK Deployed to: ${mLINK.address}`)

  const mHEX = await Token.deploy('mHEX', 'mHEX', '1000000')
  await mHEX.deployed()
  console.log(`mHEX Deployed to: ${mHEX.address}`)

  const mGRT = await Token.deploy('mGRT', 'mGRT', '1000000')
  await mGRT.deployed()
  console.log(`mGRT Deployed to: ${mGRT.address}`)

  const mSHIB = await Token.deploy('mSHIB', 'mSHIB', '1000000')
  await mSHIB.deployed()
  console.log(`mSHIB Deployed to: ${mSHIB.address}`)

  const mAPE = await Token.deploy('mAPE', 'mAPE', '1000000')
  await mAPE.deployed()
  console.log(`mAPE Deployed to: ${mAPE.address}`)

  const mSNX = await Token.deploy('mSNX', 'mSNX', '1000000')
  await mSNX.deployed()
  console.log(`mSNX Deployed to: ${mSNX.address}`)

  const mMASK = await Token.deploy('mMASK', 'mMASK', '1000000')
  await mMASK.deployed()
  console.log(`mMASK Deployed to: ${mMASK.address}`)

  const exchange = await Exchange.deploy(accounts[1].address, 10)
  await exchange.deployed()
  console.log(`Exchange Deployed to: ${exchange.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
