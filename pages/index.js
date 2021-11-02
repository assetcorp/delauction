import React from 'react'
import Head from 'next/head'
import { eraseCookie, getCookie, setCookie } from '../src/utils'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Web3 from '../src/utils/web3'
import Contract from '../src/utils/DelAuction'

const defaultContractInfo = {
  beneficiary: null,
  highestBidder: null,
  bidStarted: null,
  bidEnded: null,
  endBidTime: 0,
  highestBidAmount: 0,
  artifactURI: null,
}
const minimumBidAmount = 0.01

const Home = () => {
  const [isLoading, setIsLoading] = React.useState( true )
  const [assetURI, setAssetURI] = React.useState( null )
  const [isLoggedIn, setIsLoggedIn] = React.useState( null )
  const [isEnded, setIsEnded] = React.useState( false )
  const [isStarted, setIsStarted] = React.useState( false )
  const [highestBidAmount, setHighestBidAmount] = React.useState( 0.00 )
  const [shouldLogin, setShouldLogIn] = React.useState( false )
  const [adminSecretCode, setAdminSecretCode] = React.useState( '' )
  const [web3PluginAvailable, setWeb3PluginAvailable] = React.useState( null )
  const [auctionWalletAddress, setAuctionWalletAddress] = React.useState( '' )
  const [auctionEndTime, setAuctionEndTime] = React.useState( 0 )
  const [auctionAssetURI, setAuctionAssetURI] = React.useState( '' )
  const [contractInfo, setContractInfo] = React.useState( { ...defaultContractInfo } )
  const [timeRemaining, setTimeRemaining] = React.useState( 0 )
  const [shouldBid, setShouldBid] = React.useState( false )
  const [bidAmount, setBidAmount] = React.useState( 0 )

  const handleOnAdminLoginClicked = ( state = false ) => {
    setShouldLogIn( state )
  }

  const handleLogin = async () => {
    try {
      setIsLoading( true )
      if ( !adminSecretCode ) alert( 'Please enter a valid secret code' )

      const request = await fetch( '/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify( {
          secret: adminSecretCode
        } )
      } )
      const response = await request.json()
      // console.log( response )
      if ( !request.ok ) return alert( response.message || 'There was an error' )

      setCookie( 'adminToken', response.token )
      setAdminSecretCode( '' )
      setIsLoggedIn( true )
      setShouldLogIn( false )

    } catch ( error ) {
      console.error( error )
      alert( 'Something went wrong. Please try again.' )
    } finally {
      setIsLoading( false )
    }
  }

  const handleBid = async () => {
    try {
      setIsLoading( true )
      if ( !minimumBidAmount ) return alert( `Enter an amount to bid >= ${minimumBidAmount}.` )
      if ( !auctionWalletAddress ) return alert( 'Your wallet address is not specified' )

      try {

        await Contract.methods.bid().send( {
          from: auctionWalletAddress,
          value: bidAmount,
        } );

        // Update contract information
        handleUpdateContractInfo()
      } catch ( err ) {
        alert( err.message || 'The transaction failed' )
      }
    } catch ( error ) {
      console.error( error )
      alert( 'Failed to bid. Please try again' )
    } finally {
      setIsLoading( false )
    }
  }

  const handleWithdrawal = async () => {
    try {
      setIsLoading( true )
      if ( !auctionWalletAddress ) return alert( 'Your wallet address is not specified' )

      try {

        await Contract.methods.withdrawBid().send( {
          from: auctionWalletAddress,
        } );

        // Update contract information
        handleUpdateContractInfo()
      } catch ( err ) {
        alert( err.message || 'The transaction failed' )
      }
    } catch ( error ) {
      console.error( error )
      alert( 'Failed to withdraw bid. Please try again' )
    } finally {
      setIsLoading( false )
    }
  }

  const handleEndAuction = async () => {
    try {
      setIsLoading( true )
      try {

        await Contract.methods.endAuction().send( {
          from: auctionWalletAddress,
        } );

        // Update contract information
        await handleUpdateContractInfo()
      } catch ( err ) {
        alert( err.message || 'The transaction failed' )
      }
    } catch ( error ) {
      console.error( error )
      alert( 'Failed to bid. Please try again' )
    } finally {
      setIsLoading( false )
    }
  }

  const handleStartAuction = async () => {
    try {
      setIsLoading( true )
      if ( !web3PluginAvailable ) return alert( 'MetaMask is not available.' )
      if ( !auctionWalletAddress ) return alert( 'Your wallet address is not specified' )
      if ( !auctionEndTime ) return alert( 'Please specify the time frame for your auction' )
      if ( !auctionAssetURI ) return alert( 'Please specify your asset URI' )

      try {
        await Contract.methods.startBid( auctionEndTime, auctionWalletAddress, auctionAssetURI ).send( {
          from: auctionWalletAddress,
        } );

        // Update contract information
        handleUpdateContractInfo()
      } catch ( err ) {
        alert( err.message || 'The transaction failed' )
      }

    } catch ( error ) {
      console.error( error )
      alert( 'Something went wrong. Please try again.' )
    } finally {
      setIsLoading( false )
    }
  }

  const handleUpdateContractInfo = async () => {
    try {
      setIsLoading( true )
      const beneficiary = await Contract.methods.beneficiary().call()
      const highestBidder = await Contract.methods.highestBidder().call()
      const bidStarted = await Contract.methods.bidStarted().call()
      const bidEnded = await Contract.methods.bidEnded().call()
      const endBidTime = await Contract.methods.endBidTime().call()
      const highestBidAmount = await Contract.methods.highestBidAmount().call()

      setContractInfo( {
        ...defaultContractInfo,
        beneficiary,
        highestBidder,
        bidStarted,
        bidEnded,
        endBidTime,
        highestBidAmount,
      } )
    } catch ( error ) {
      console.error( error )
      alert( 'Failed to get contract information.' )
    } finally {
      setIsLoading( false )
    }
  }

  const biddingForm = (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wallet Address</Form.Label>
        <Form.Control
          type="text"
          readOnly
          value={auctionWalletAddress}
          placeholder="Enter wallet address"
        />
        <Form.Text className="text-muted">
          You need this to collect your earnings
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Bid Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder={`Enter an amount to bid >= ${minimumBidAmount}.`}
          onChange={evt => setBidAmount( evt.target.value )}
        />
      </Form.Group>
    </Form>
  )

  const biddingContent = (
    <React.Fragment>
      {
        !isEnded ? (
          <div>
            <p className={styles.textFaded}>Minimum Bid Amount</p>
            <p className={styles.amountTitle}>
              <code>
                {Number( minimumBidAmount ).toFixed( 2 )} ETH
              </code>
            </p>
            {shouldBid && biddingForm}
            <div>
              <Button
                disabled={shouldBid && !( bidAmount >= minimumBidAmount )}
                variant="primary"
                type="button"
                style={{ marginRight: '1rem' }}
                onClick={() => {
                  if ( shouldBid ) handleBid()
                  else setShouldBid( true )
                }} >
                {shouldBid ? `Bid ${bidAmount} ETH` : 'Start Bid'}
              </Button>
              {
                shouldBid && (
                  <Button
                    variant="secondary"
                    type="button"
                    style={{ marginRight: '1rem' }}
                    onClick={() => setShouldBid( false )} >
                    Cancel bid
                  </Button>
                )
              } {
                ( isLoggedIn && !isEnded ) && (
                  <Button
                    variant="warning"
                    type="button"
                    style={{ marginRight: '1rem' }}
                    onClick={() => handleEndAuction()} >
                    End Auction
                  </Button>
                )
              }
            </div>
          </div>
        ) :
          (

            <div className="mb-3">
              <p className={styles.textFaded}>Highest Bid</p>
              <p className={styles.amountTitle}>
                <code>{Number( highestBidAmount ).toFixed( 2 )} ETH</code>
              </p>
              <Button
                disabled={shouldBid && !( bidAmount >= minimumBidAmount )}
                variant="primary"
                type="button"
                style={{ marginRight: '1rem' }}
                onClick={handleWithdrawal} >
                Withdraw Funds
              </Button>
            </div>
          )
      }
    </React.Fragment>
  )

  const shouldStartContent = (
    <React.Fragment>
      {
        isLoggedIn ? (
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Wallet Address</Form.Label>
                <Form.Control
                  type="text"
                  readOnly
                  value={auctionWalletAddress}
                  placeholder="Enter wallet address"
                />
                <Form.Text className="text-muted">
                  You need this to collect your earnings
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Select aria-label="End time"
                  onChange={evt => setAuctionEndTime( Number( evt.target.value ) )}>
                  <option value={0}>Select a time</option>
                  <option value={60}>1 minute</option>
                  <option value={120}>2 minutes</option>
                  <option value={300}>5 minutes</option>
                  <option value={3600}>1 hour</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  How long should the auction be open after being started?
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRevealTime">
                <Form.Label>Asset URI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter asset URI"
                  onChange={evt => setAuctionAssetURI( evt.target.value )}
                />
                <Form.Text className="text-muted">
                  This is the asset to be auctioned
                </Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                disabled={( !auctionAssetURI || !auctionWalletAddress || !auctionEndTime )}
                type="button"
                onClick={handleStartAuction}>
                Start Auction
              </Button>
            </Form>
          </div>
        ) : (
          <div>
            {
              web3PluginAvailable ? (
                <div>
                  <p className={styles.title}>Auction Pending...</p>
                  <p className={styles.amountTitle} style={{ textAlign: 'center' }}>
                    <code>
                      Please wait until admin starts
                    </code>
                  </p>
                </div>
              ) : (
                <div>
                  <p style={{ textAlign: 'center' }}>
                    <code>
                      You do not have a Web3 enabled wallet installed. Please try <a href="https://metamask.io/"
                        target="_blank"
                        rel="noopener noreferrer">
                        MetaMask
                      </a>
                    </code>
                  </p>
                </div>
              )
            }

          </div>
        )
      }
    </React.Fragment>
  )

  React.useEffect( () => {
    const adminToken = getCookie( 'adminToken' )
    if ( adminToken ) {
      setIsLoggedIn( true )
    }

    // Check if metamask is available
    setWeb3PluginAvailable( Web3 && Contract )

  }, [] )

  React.useEffect( () => {
    if ( web3PluginAvailable ) {
      // Enable Ethereum
      ( async () => {
        await window.ethereum.enable()
        const accounts = await Web3.eth.getAccounts()

        setAuctionWalletAddress( accounts[0] )
        await handleUpdateContractInfo()
      } )()
    } else {
      setIsLoading( false )
    }
  }, [web3PluginAvailable] )

  React.useEffect( () => {
    console.log( contractInfo )
    setIsStarted( contractInfo.bidStarted )
    setIsEnded( contractInfo.bidEnded )
    setHighestBidAmount( contractInfo.highestBidAmount )
    setAssetURI( contractInfo.artifactURI )

    let interval = null
    if ( contractInfo.bidStarted ) {
      interval = setInterval( () => {
        const remaining = Number( contractInfo.endBidTime ) - parseInt( new Date().getTime() / 1000 )
        setTimeRemaining( remaining )
      }, 1000 )
    } else {
      clearInterval( interval )
      setTimeRemaining( 0 )
    }

    () => clearInterval( interval )
  }, [contractInfo] )

  return (
    <div className={styles.container}>
      <Head>
        <title>Del Auction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DelAuction – by <a
            href="https://linkedin.com/in/sondelali/"
            target="_blank"
            rel="noopener noreferrer">
            Delali
          </a>
        </h1>

        <p className={styles.description}>
          An <code className={styles.code}>ERC-721</code> smart contract application that enables people to bid on a digital asset.
        </p>

        {
          isLoading ? (
            <p className={styles.description}>
              <code className={styles.code}>Loading...</code> please wait.
            </p>
          ) : (
            <React.Fragment>
              {
                isStarted && (
                  <div>
                    <p className={styles.description}>
                      About <code className={styles.code}>{timeRemaining}</code> seconds remaining. Will end at <code className={styles.code}>{new Date( Number( contractInfo.endBidTime ) ).toLocaleString()}</code>
                    </p>
                    <p className={styles.description}>
                      Highest Bid Amount: <code className={styles.code}>{Number( highestBidAmount ).toFixed( 2 )}</code>
                    </p>
                  </div>
                )
              }

              {
                !shouldLogin && (
                  <React.Fragment>
                    <Container fluid className="mb-4">
                      <Row>
                        <Col xs={12} md={6}>
                          <div className={styles.boxFlexCenter} style={{ flexDirection: 'column', height: '100%' }}>
                            <Card style={{ width: '200px' }} >
                              <Card.Img variant="bottom" src={assetURI} width="200" height="300" />
                            </Card>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div className={styles.boxFlexCenter} style={{ flexDirection: 'column', height: '100%' }}>
                            <div style={{ width: '100%' }}>
                              {!isStarted && shouldStartContent}
                              {isStarted && biddingContent}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <Container
                      fluid
                      className={clsx( styles.boxFlexCenter, 'mb-4' )}
                      style={{ margin: '2rem 0' }}>
                      {
                        isLoggedIn ? (
                          <div style={{ textAlign: 'center' }}>
                            <p>You are the Admin</p>
                            <Button
                              variant="primary"
                              type="button"
                              onClick={() => {
                                eraseCookie( 'adminToken' )
                                setIsLoggedIn( false )
                              }}>
                              Logout
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant="primary"
                            type="button"
                            onClick={() => handleOnAdminLoginClicked( true )}>
                            Admin Login
                          </Button>
                        )
                      }
                    </Container>
                  </React.Fragment>
                )
              }

              {
                shouldLogin && (
                  <Container
                    fluid
                    className={clsx( styles.boxFlexCenter, 'mb-4' )}
                    style={{ margin: '2rem 0' }}>
                    <div className={styles.boxFlexCenter} style={{ flexDirection: 'column', height: '100%' }}>
                      <div style={{ width: '100%', maxWidth: 900 }}>
                        <Form>
                          <Form.Group className="mb-3" controlId="">
                            <Form.Label>Secret Code</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter admin secret code"
                              onChange={evt => setAdminSecretCode( evt.target.value )} />
                          </Form.Group>
                          <div>
                            <Button
                              disabled={!adminSecretCode.length}
                              variant="primary"
                              type="button" style={{ marginRight: '1rem' }}
                              onClick={handleLogin}>
                              Login
                            </Button>
                            <Button
                              variant="secondary"
                              type="button"
                              onClick={() => handleOnAdminLoginClicked( false )}>
                              Cancel
                            </Button>
                          </div>

                        </Form>
                      </div>
                    </div>
                  </Container>
                )
              }
            </React.Fragment>
          )
        }

      </main>

      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/sondelali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Delali
        </a>
      </footer>
    </div>
  )
}

export default Home