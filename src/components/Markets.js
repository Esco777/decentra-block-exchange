import { useSelector, useDispatch } from 'react-redux'

import config from '../config.json'

import { loadTokens } from '../store/interactions'

const Markets = () => {
    const provider = useSelector(state => state.provider.connection)
    const chainId = useSelector(state => state.provider.chainId)

    const dispatch = useDispatch()

    const marketHandler = async (e) => {
        loadTokens(provider, (e.target.value).split(','), dispatch)
    }

    return(
      <div className='component exchange__markets'>
        <div className='component__header'>
            <h2>Select Market</h2>
        </div>

        {chainId && config[chainId] ? (
        <select name="markets" id="markets" onChange={marketHandler}>
            <option value={`${config[chainId].DCB.address},${config[chainId].mETH.address}`}>DCB / mETH</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mDAI.address}`}>DCB / mDAI</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mLINK.address}`}>DCB / mLINK</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mHEX.address}`}>DCB / mHEX</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mGRT.address}`}>DCB / mGRT</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mSHIB.address}`}>DCB / mSHIB</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mAPE.address}`}>DCB / mAPE</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mSNX.address}`}>DCB / mSNX</option>
            <option value={`${config[chainId].DCB.address},${config[chainId].mMASK.address}`}>DCB / mMASK</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].DCB.address}`}>mDAI / DCB</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].mLINK.address}`}>mDAI / mLINK</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].mHEX.address}`}>mDAI / mHEX</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].mGRT.address}`}>mDAI / mGRT</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].mSHIB.address}`}>mDAI / mSHIB</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].mAPE.address}`}>mDAI / mAPE</option>
            <option value={`${config[chainId].mDAI.address},${config[chainId].mSNX.address}`}>mDAI / mSNX</option>
            <option value={`${config[chainId].mETH.address},${config[chainId].DCB.address}`}>mETH / DCB</option>
            <option value={`${config[chainId].mETH.address},${config[chainId].mDAI.address}`}>mETH / mDAI</option>
            <option value={`${config[chainId].mETH.address},${config[chainId].mLINK.address}`}>mETH / mLINK</option>
            <option value={`${config[chainId].mETH.address},${config[chainId].mHEX.address}`}>mETH / mHEX</option>
            <option value={`${config[chainId].mETH.address},${config[chainId].mMASK.address}`}>mETH / mMASK</option>
        </select>
        ) : (
            <div>
                <p>Not Deployed to Network</p>
            </div>
        )}
  
        <hr />
      </div>
    )
  }
  
  export default Markets;