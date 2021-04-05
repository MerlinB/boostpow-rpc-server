var rpc = require("json-rpc2")

var server = rpc.Server.$create({
  websocket: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

/**
 * Should return oldest boostPoW job template until we can sort by profitability.
 *
 * Pool requires these properties:
 * version
 * previousblockhash - TODO: Is used differently in boostPoW so the pool must be modified to ignore it
 * transactions - TODO: Pool must be modified to ignore transactions when building a block template
 * coinbasevalue is used for for calculating reward
 * target is used for calculating difficulty
 * curtime
 * bits is used for calculating difficulty
 * height - Must increase with every new job to be considered a new block
 */
server.expose("getblocktemplate", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Pool requires these properties:
 * chain
 * blocks
 * difficulty
 */
server.expose("getblockchaininfo", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Only used by fetch blockchain download status and check node online status.
 * TODO: Blockchain download status can easily be removed from pool.
 *
 * Pool requires these properties on peers:
 * startingheight
 */
server.expose("getpeerinfo", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Only used for logging.
 *
 * Pool requires these properties:
 * protocolVersion
 * connections
 */
server.expose("getnetworkinfo", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

server.expose("submitblock", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Only used to check whether submitted block was accepted.
 *
 * Pool requires these properties:
 * hash - TODO: Pool saves txHash and lates uses it to fetch coinbase transactions when processing payments. This needs to be changed.
 */
server.expose("getblock", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Only used to fetch coinbase transactions for payment processing.
 * TODO: Needs to be changed.
 *
 * Pool requires these properties of transactions:
 * details [
 *  amount
 *  address
 *  length
 *  category
 * ]
 */
server.expose("gettransaction", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Used for validating coin reward address
 *
 * Pool requires these properties:
 * isvalid
 */
server.expose("validateaddress", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Used to check if address is owned by the pool
 *
 * Pool requires these properties:
 * ismine
 */
server.expose("getaddressinfo", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Only used for payment processing
 */
server.expose("getbalance", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Used for payouts
 */
server.expose("sendmany", (args, opt, callback) => {
  callback(null, {
    test: "test"
  })
})

/**
 * Just used to determine whether node uses PoW or PoS
 */
server.expose("getdifficulty", (args, opt, callback) => {
  callback(null, 1)
})

/**
 * Only used for logging network hashrate
 * TODO: can be removed from pool
 *
 * Pool requires these properties:
 * networkhashps
 */
server.expose("getmininginfo", (args, opt, callback) => {
  callback(null, 1)
})

server.listen(8332, "localhost")
