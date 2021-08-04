$(function () {
  
  consoleInit();
  start(main);

});

const thispagespools = [
  {
    pool_id: 'png-yfi',
    snowglobe: '0x234ed7c95Be12b2A0A43fF602e737225C83c2aa1',
    nickname: 'PNG-YFI Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0x99519AcB025a0e0d44c3875A4BbF03af65933627',
    pair: '0xa465e953f9f2a00b2c1c5805560207b66a570093',
    stake: '0xc7D0E29b616B29aC6fF4FD5f37c8Da826D16DB0D'
  },
  {
    pool_id: 'png-uni',
    snowglobe: '0x14F98349Af847AB472Eb7f7c705Dc4Bee530713B',
    nickname: 'PNG-UNI Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab',
    pair: '0x874685bc6794c8b4befbd037147c2eef990761a9',
    stake: '0x4f74BbF6859A994e7c309eA0f11E3Cc112955110'
  },  
  {
    pool_id: 'png-aave',
    snowglobe: '0x3270b685A4a61252C6f30c1eBca9DbE622984e22',
    nickname: 'PNG-AAVE Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9',
    pair: '0x0025cebd8289bbe0a51a5c85464da68cbc2ec0c4',
    stake: '0xFd9ACEc0F413cA05d5AD5b962F3B4De40018AD87'
  },
  {
    pool_id: 'png-dai',
    snowglobe: '0xcD651AD29835099334d312a9372418Eb2b70c72F',
    nickname: 'PNG-DAI Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a',
    pair: '0xd765b31399985f411a9667330764f62153b42c76',
    stake: '0xe3103e565cF96a5709aE8e603B1EfB7fED04613B'
  },  
  {
    pool_id: 'png-sushi',
    snowglobe: '0x8eDd233546730C51a9d3840e954E5581Eb3fDAB1',
    nickname: 'SUSHI-PNG Pangolin LP',
    token0: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
    token1: '0x60781C2586D68229fde47564546784ab3fACA982', 
    pair: '0xf105fb50fc6ddd8a857bbecd296c8a630e8ca857',
    stake: '0x633F4b4DB7dD4fa066Bd9949Ab627a551E0ecd32'
  },  
  {
    pool_id: 'png-usdt',
    snowglobe: '0x7987aDB3C789f071FeFC1BEb15Ce6DfDfbc75899',
    nickname: 'PNG-USDT Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xde3A24028580884448a5397872046a019649b084', 
    pair: '0xE8AcF438B10A2C09f80aEf3Ef2858F8E758C98F9',
    stake: '0xE2510a1fCCCde8d2D1c40b41e8f71fB1F47E5bBA'
  },
  {
    pool_id: 'png-link',
    snowglobe: '0x392c51Ab0AF3017E3e22713353eCF5B9d6fBDE84',
    nickname: 'PNG-LINK Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651', 
    pair: '0x7313835802c6e8ca2a6327e6478747b71440f7a4',
    stake: '0x6356b24b36074AbE2903f44fE4019bc5864FDe36'
  },
  {
    pool_id: 'png-wbtc',
    snowglobe: '0x763Aa38c837f61DD8429313933Cc47f24E881430',
    nickname: 'WBTC-PNG Pangolin LP',
    token0: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
    token1: '0x60781C2586D68229fde47564546784ab3fACA982', 
    pair: '0xf372ceae6b2f4a2c4a6c0550044a7eab914405ea',
    stake: '0x681047473B6145BA5dB90b074E32861549e85cC7'
  },
  {
    pool_id: 'png-eth',
    snowglobe: '0x3815f36C3d60d658797958EAD8778f6500be16Df',
    nickname: 'PNG-ETH Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    pair: '0x53b37b9a6631c462d74d65d61e1c056ea9daa637',
    stake: '0x7ac007afB5d61F48D1E3C8Cc130d4cf6b765000e'
  },
  {
    pool_id: 'png-vso',
    snowglobe: '0x8309C64390F376fD778BDd701d54d1F8DFfe1F39',
    nickname: 'PNG-VSO Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a',
    pair: '0x9d472e21f6589380b21c42674b3585c47b74c891',
    stake: '0x759ee0072901f409e4959E00b00a16FD729397eC'
  },
  {
    pool_id: 'png-snob',
    snowglobe: '0xB4db531076494432eaAA4C6fCD59fcc876af2734',
    nickname: 'PNG-SNOB Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
    pair: '0x97b4957df08e185502a0ac624f332c7f8967ee8d',
    stake: '0x08B9A023e34Bad6Db868B699fa642Bf5f12Ebe76'
  },
  {
    pool_id: 'png-spore',
    snowglobe: '0xa39785a4E4CdDa7509751ed152a00f3D37FbFa9F',
    nickname: 'PNG-SPORE Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985',
    pair: '0xad24a72ffe0466399e6f69b9332022a71408f10b',
    stake: '0x12A33F6B0dd0D35279D402aB61587fE7eB23f7b0'
  },
  {
    pool_id: 'png-bnb',
    network: 'Pangolin',
    snowglobe: '0x585DE92A24057400a7c445c89338c7d6c61dd080',
    nickname: 'PNG-BNB Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0x264c1383EA520f73dd837F915ef3a732e204a493',
    pair: '0x76BC30aCdC88b2aD2e8A5377e59ed88c7f9287f9',
    stake: '0x68a90C38bF4f90AC2a870d6FcA5b0A5A218763AD'
  },
  {
    pool_id: 'joe-png-joe',
    network: 'TraderJoe',
    snowglobe: '0xB4Fe95e89ED8894790aA6164f29FaC4B0De94f47',
    nickname: 'JOE-PNG Joe LP',
    token0: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    token1: '0x60781C2586D68229fde47564546784ab3fACA982',
    pair: '0xE4B66cA7a32DDc21df3c1233866957573e7EC744',
    stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
  },
  {
    pool_id: 'png-xava-png',
    network: 'Pangolin',
    snowglobe: '0xF23c55a05C9f24177FFF5934e8192461AeE4f304',
    nickname: 'PNG-XAVA Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
    pair: '0x851D47BE09BD0D3c2B24922e34a4f8AE05456924',
    stake: '0x5b3Ed7f47D1d4FA22b559D043a09d78bc55A94E9'
  },
  {
    pool_id: 'png-pefi-png',
    network: 'Pangolin',
    snowglobe: '0xf5b4Ba166b8b351C0dF92BdD6bf7d46d537185fB',
    nickname: 'PNG-PEFI Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
    pair: '0x1bb5541EcCdA68A352649954D4C8eCe6aD68338d',
    stake: '0x76e404Ab7357fD97d4f1e8Dd52f298A035fd408c'
  },
  {
    pool_id: 'png-sherpa-png',
    network: 'Pangolin',
    snowglobe: '0x8406aAF035c2c50239b32D1cb4583916c1F1c094',
    nickname: 'PNG-SHERPA Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6',
    pair: '0x3DCC9711558115bFB73db19E8326cD717F6E5540',
    stake: '0x80E919784e7c5AD3Dd59cAfCDC0e9C079B65f262'
  },
  {
    pool_id: 'png-tryb-png',
    network: 'Pangolin',
    snowglobe: '0xd7E8d994e0ac76a8c41496290A11CA212F074851',
    nickname: 'PNG-TRYB Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0x564A341Df6C126f90cf3ECB92120FD7190ACb401',
    pair: '0x471163B54b5db0497cd9eAFCb1b53CC569d71B76',
    stake: '0x0A9773AEbc1429d860A492d70c8EA335fAa9F19f'
  }
]

async function main() {  

  return Promise.all([
    init_ethers(),
    getAvaxPrices()
  ]).then(results => {
    
    window.app = results[0]  
    window.prices = results[1]  
    window.tvl = 0;
    
    gentop().then(td => { console.log('top done:', td) })
    genpool(thispagespools.pop())

  })

}