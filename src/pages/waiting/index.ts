const Waiting = document.createElement("div");
Waiting.className = "p-16";
Waiting.innerHTML = `
<div class="alert alert-warning h-40 text-2xl p-8 shadow-lg">
  <div>
    <span>
      <i class="fa-solid fa-triangle-exclamation"></i>
    </span>
    <span>Warning: This Page is Waiting to complete!</span>
  </div>

  <div class="flex-none">
    <a 
      href="/"
      class="link link-primary btn btn-sm btn-ghost"
    >
      Home Page
    </a>
  </div>  
</div>
`;

export default Waiting;
