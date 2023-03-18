const Avatar = document.createElement("div");
Avatar.setAttribute("class", "dropdown dropdown-end");

Avatar.innerHTML = `
  <label tabindex="0" class="btn-ghost btn-circle avatar btn">
    <div class="w-10 rounded-full">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        loading="lazy"
      />
    </div>
  </label>

  <ul
    tabindex="0"
    class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
  >
    <li>
      <button class="btn-ghost btn justify-between capitalize">
        Profile
        <span class="badge-primary badge">New</span>
      </button>
    </li>

    <li>
      <button 
        id="avatar-action" 
        class="btn-ghost btn justify-between capitalize"
      >
        Logout
      </button>
    </li>
  </ul>
`;

export default Avatar;
