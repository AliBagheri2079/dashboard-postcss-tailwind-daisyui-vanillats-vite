import SingleCoinDialog from "@/layouts/public/Dialog/SingleCoin";

//* better way use just 'Coin' insteadof 'SingleCoin'
const SingleCoin = document.createDocumentFragment();
SingleCoin.append(SingleCoinDialog);

export default SingleCoin;
