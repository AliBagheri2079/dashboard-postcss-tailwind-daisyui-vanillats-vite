let CoinDataBodyPlaceholder: string = "";

for (let index = 0; index < 10; index++) {
  CoinDataBodyPlaceholder += `
   <tr class="hover">
     <th></th>
     <td>
       <img
         src="https://placehold.jp/40x40.png"
         class="opacity-70 animate-pulse w-8 h-8 object-cover rounded-full"
         loading="lazy"
       />
     </td>
     <td>
       <div class="bg-base-300 opacity-70 animate-pulse h-4 rounded-md"></div>
     </td>
     <td>
       <div class="bg-base-300 opacity-70 animate-pulse h-4 rounded-md"></div>
     </td>
     <td>
       <div class="bg-base-300 opacity-70 animate-pulse h-4 rounded-md"></div>
     </td>
     <td>
       <div class="bg-base-300 opacity-70 animate-pulse h-4 rounded-md"></div>
     </td>
     <td>
       <div class="bg-base-300 opacity-70 animate-pulse h-4 rounded-md"></div>
     </td>
   </tr>
   `;
}

export default CoinDataBodyPlaceholder;
