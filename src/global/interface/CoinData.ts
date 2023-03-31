export interface CoinDataType {
	id: string;
	symbol: string;
	name: string;
	hashing_algorithm: string;
	categories: string[];
	description: {
		en: string;
	};
	links: {
		homepage: string[];
		blockchain_site: string[];
		subreddit_url: string;
		repos_url: {
			github: string[];
			bitbucket: string[] | [];
		};
	};
	image: {
		thumb: string;
		small: string;
		large: string;
	};
	genesis_date: Date;
	coingecko_rank: number;
	coingecko_score: number;
	developer_score: number;
	community_score: number;
	liquidity_score: number;
	public_interest_score: number;
	market_data: {
		current_price: {
			usd: number;
		};
		ath: {
			usd: number;
		};
		ath_change_percentage: {
			usd: number;
		};
		ath_date: {
			usd: Date;
		};
		atl: {
			usd: number;
		};
		atl_change_percentage: {
			usd: number;
		};
		atl_date: {
			usd: Date;
		};
		market_cap: {
			usd: number;
		};
		market_cap_rank: number;
		fully_diluted_valuation: {
			usd: number;
		};
		total_volume: {
			usd: number;
		};
		high_24h: {
			usd: number;
		};
		low_24h: {
			usd: number;
		};
		price_change_24h_in_currency: {
			usd: number;
		};
		price_change_percentage_1h_in_currency: {
			usd: number;
		};
		price_change_percentage_24h_in_currency: {
			usd: number;
		};
		price_change_percentage_7d_in_currency: {
			usd: number;
		};
		price_change_percentage_14d_in_currency: {
			usd: number;
		};
		price_change_percentage_60d_in_currency: {
			usd: number;
		};
		price_change_percentage_200d_in_currency: {
			usd: number;
		};
		price_change_percentage_1y_in_currency: {
			usd: number;
		};
		market_cap_change_24h_in_currency: {
			usd: number;
		};
		market_cap_change_percentage_24h_in_currency: {
			usd: number;
		};
		total_supply: number;
		max_supply: number;
		circulating_supply: number;
		sparkline_7d: {
			price: number[];
		};
		last_updated: Date;
	};
	developer_data: {
		forks: number;
		stars: number;
		subscribers: number;
		total_issues: number;
		closed_issues: number;
		pull_requests_merged: number;
		pull_request_contributors: number;
		code_additions_deletions_4_weeks: {
			additions: number;
			deletions: number;
		};
		commit_count_4_weeks: number;
		last_4_weeks_commit_activity_series: number[];
	};
	public_interest_stats: {
		alexa_rank: number;
	};
	last_updated: Date;
}

/*
* splite datas
{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "hashing_algorithm": "SHA-256",
    "categories": [
        "Cryptocurrency",
        "Layer 1 (L1)"
    ],
    "description": {
        "en": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https:www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>."
    },
    "links": {
        "homepage": [
            "http://www.bitcoin.org",
            "",
            ""
        ],
        "blockchain_site": [
            "https://blockchair.com/bitcoin/",
            "https://btc.com/",
            "https://btc.tokenview.io/",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        "subreddit_url": "https://www.reddit.com/r/Bitcoin/",
        "repos_url": {
            "github": [
                "https://github.com/bitcoin/bitcoin",
                "https://github.com/bitcoin/bips"
            ],
            "bitbucket": []
        }
    },
    "image": {
        "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
        "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
        "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    },
    "genesis_date": "2009-01-03",
    "coingecko_rank": 1,
    "coingecko_score": 83.151,
    "developer_score": 99.241,
    "community_score": 83.341,
    "liquidity_score": 100.011,
    "public_interest_score": 0.073,
    "market_data": {
        "current_price": {
            "usd": 22112,
        },
        "ath": {
            "usd": 69045,
        },
        "ath_change_percentage": {
            "usd": -67.94652,
        },
        "ath_date": {
            "usd": "2021-11-10T14:24:11.849Z",
        },
        "atl": {
            "usd": 67.81,
        },
        "atl_change_percentage": {
            "usd": 32537.62696,
        },
        "atl_date": {
            "usd": "2013-07-06T00:00:00.000Z",
        },
        "market_cap": {
            "usd": 427030947163,
        },
        "market_cap_rank": 1,
        "fully_diluted_valuation": {
            "usd": 464376503622,
        },
        "total_volume": {
            "usd": 26602633135,
        },
        "high_24h": {
            "usd": 22559,
        },
        "low_24h": {
            "usd": 22011,
        },
        "price_change_24h": -250.011237964,
        "price_change_percentage_24h": -1.11801,
        "price_change_percentage_7d": -5.97811,
        "price_change_percentage_14d": -10.79,
        "price_change_percentage_30d": -5.26198,
        "price_change_percentage_60d": 31.36915,
        "price_change_percentage_200d": -4.88722,
        "price_change_percentage_1y": -42.48058,
        "market_cap_change_24h": -5375417543.498,
        "market_cap_change_percentage_24h": -1.24314,
        "price_change_24h_in_currency": {
            "usd": -250.0112379639868,
        },
        "price_change_percentage_1h_in_currency": {
            "usd": -0.41215,
        },
        "price_change_percentage_24h_in_currency": {
            "usd": -1.11801,
        },
        "price_change_percentage_7d_in_currency": {
          
            "usd": -5.97811,
           
        },
        "price_change_percentage_14d_in_currency": {
            "usd": -5.26198,  
        },
        "price_change_percentage_60d_in_currency": {
                   
            "usd": 31.36915,
          
        },
        "price_change_percentage_200d_in_currency": {
           
            "usd": -4.88722,
           
        },
        "price_change_percentage_1y_in_currency": {
                      
            "usd": -42.48058,
           
        },
        "market_cap_change_24h_in_currency": {
            
          
            "usd": -5375417543.497803,
           
        },
        "market_cap_change_percentage_24h_in_currency": {
          
            "usd": -1.24314,
            
        },
        "total_supply": 21000000.0,
        "max_supply": 21000000.0,
        "circulating_supply": 19311162.0,
        "sparkline_7d": {
            "price": [
                23508.577775294714,
                23470.418161200392,
                23290.5856616495,
                23298.72210171402,
                23063.29381745662,
                23159.646636797075,
                23155.543746825795,
                23079.25455948012,
                23292.304851388086,
                23308.9018750499,
                23482.184295045467,
                23784.042799879942,
                23691.414512124713,
                23777.49665207094,
                23709.915797916765,
                23829.946743900706,
                23778.152542468997,
                23799.188758891083,
                23728.16064979413,
                23735.748910827864,
                23696.081721592756,
                23796.06510462297,
                23726.2506975257,
                23665.59155956524,
                23712.71782096267,
                23682.52545294416,
                23556.225693504046,
                23427.883714031843,
                23576.425430335858,
                23504.747683174395,
                23634.333489123786,
                23663.12537721522,
                23519.00841198621,
                23493.811912342382,
                23506.48966274534,
                23428.364922512046,
                23438.2953781779,
                23455.193198202353,
                23393.49886298945,
                23449.933923364155,
                23429.430046442114,
                23412.569662781654,
                23423.026552982563,
                23349.073024716425,
                23335.594101318686,
                23302.64712467313,
                23330.35049835348,
                23283.76528293185,
                23279.37122891428,
                23397.205230397754,
                23473.5347574165,
                23539.61281971209,
                23447.605445168498,
                23515.128732237215,
                23469.231618829668,
                23435.63929517383,
                22259.675591254836,
                22379.1459397478,
                22370.707926324667,
                22391.647510563194,
                22370.28747392772,
                22384.984819417034,
                22383.126357783643,
                22405.532208305485,
                22396.803791664923,
                22381.840673031795,
                22375.545543065367,
                22353.188705437304,
                22431.416229651353,
                22396.218654305092,
                22357.601228312662,
                22362.95667643471,
                22417.00489088355,
                22340.64433137837,
                22366.54355005848,
                22332.474297937708,
                22307.671979178518,
                22314.52765702006,
                22362.45766625331,
                22395.932301491983,
                22370.469224641507,
                22373.094466822888,
                22374.181314932543,
                22364.052855247235,
                22349.33800459337,
                22388.415821286224,
                22383.081540900494,
                22359.834190689075,
                22374.13749070038,
                22352.073543907267,
                22352.717672379025,
                22380.236620205513,
                22378.75135601226,
                22363.70699450674,
                22335.296596622255,
                22339.448877842322,
                22311.580191799014,
                22333.93450398392,
                22233.9306002736,
                22203.57313487645,
                22215.732009315154,
                22346.33233920694,
                22348.32991538815,
                22365.67919223727,
                22609.50968265507,
                22271.621307056605,
                22412.691294442255,
                22458.18155355079,
                22446.9013154151,
                22436.738723314254,
                22397.556696941287,
                22337.749516730626,
                22386.65369422633,
                22432.317957103267,
                22412.868368255655,
                22451.735137132684,
                22493.63280866233,
                22465.464231100654,
                22476.240200045482,
                22441.430518504727,
                22459.730831121095,
                22429.0166710947,
                22427.021335757956,
                22429.168230685544,
                22534.14106727921,
                22455.521105156393,
                22432.85634630719,
                22446.704207355437,
                22405.871753227584,
                22420.56459795589,
                22407.277637305626,
                22362.00823955405,
                22375.039455087837,
                22422.125634818287,
                22413.812768997555,
                22431.198532520255,
                22407.24052716349,
                22404.298903649327,
                22400.563638335858,
                22393.18714275068,
                22405.74091399527,
                22460.953361220167,
                22432.71924932509,
                22548.56002224413,
                22529.992641588986,
                22495.502238217545,
                22536.241866918812,
                22456.20719527491,
                22362.196507265864,
                22413.870229736516,
                22430.81746309442,
                22414.06021826144,
                22492.302674204086,
                22463.93220672041,
                22515.21563268249,
                22480.78676386218,
                22473.944938112774,
                22471.823436897506,
                22445.71820108979,
                22441.55103007756,
                22421.621426118632,
                22400.010449736306,
                22409.451022887457,
                22383.223220601696,
                22406.735643216747,
                22401.431348025064,
                22353.43403616607,
                22331.018759965096,
                22245.6038174552
            ]
        },
        "last_updated": "2023-03-07T20:58:11.269Z"
    },
    "developer_data": {
        "forks": 33877,
        "stars": 68502,
        "subscribers": 3923,
        "total_issues": 7332,
        "closed_issues": 6937,
        "pull_requests_merged": 10511,
        "pull_request_contributors": 819,
        "code_additions_deletions_4_weeks": {
            "additions": 41815,
            "deletions": -9273
        },
        "commit_count_4_weeks": 237,
        "last_4_weeks_commit_activity_series": [
            0,
            1,
            3,
            3,
            4,
            3,
            1,
            0,
            3,
            5,
            3,
            2,
            6,
            3,
            0,
            7,
            5,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    "public_interest_stats": {
        "alexa_rank": 9440,
        "bing_matches": null
    },
    "status_updates": [],
    "last_updated": "2023-03-07T20:58:11.269Z"
}
*/
