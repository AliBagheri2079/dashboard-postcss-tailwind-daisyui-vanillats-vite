import CoinDataHead from "./CoinDataHead";
import CoinDataBody from "./CoinDataBody";

const CoinData = document.createElement("section");
CoinData.innerHTML = `
  <div class="overflow-x-auto my-2">
    <table class="table w-full">
      <thead>
        ${CoinDataHead}
      </thead>
      <tbody id="coin-data-body">
        ${CoinDataBody}
      </tbody>
    </table>
  </div>
`;
export default CoinData;
