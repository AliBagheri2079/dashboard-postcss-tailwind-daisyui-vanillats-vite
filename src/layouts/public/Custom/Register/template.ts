//* Create template element
const template = document.createElement("template");
const style = `
<style>
/* register wrapper styles */ 
.register {
  display: flex; 
  justify-content: center; 
  align-items: center;
  min-height: 60%;
}

/* register card styles */ 
.register__card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--rounded-box, 1rem);
}
.register__card--colors {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
 
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.register__card--size {
  flex-shrink: 0;
  width: 100%;
  max-width: 28rem/* 448px */;
}
.register__card:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* register card body styles */ 
.register__card__body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: var(--padding-card, 2rem);
  gap: 0.5rem/* 8px */;
}
.register__card__body :where(p) {
  flex-grow: 1;
}

/* form control, action styles */ 
.form-control {
  display: flex;
  flex-direction: column;
}
.form-action {
  margin-top: 3rem;
  flex-direction: row; 
  gap: 0.25rem;
}

/* label styles */ 
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding-inline: 0.25rem/* 4px */;
  padding-block: 0.5rem/* 8px */;
  user-select: none;
}
.label-text {
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;

  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}

/* input styles */
.input {
  flex-shrink: 1;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  height: 3rem/* 48px */;
  padding-left: 1rem/* 16px */;
  padding-right: 1rem/* 16px */;
  font-size: 1rem/* 16px */;
  line-height: 1.25rem/* 20px */;
  line-height: 2;
  line-height: 1.5rem/* 24px */;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  border-radius: var(--rounded-btn, 0.5rem);
}
.input:valid {
  outline: 2px solid limegreen;
}
.input:invalid {
  outline: 2px solid red;
}
.input::placeholder {
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
}
.input-bordered {
  --tw-border-opacity: 0.2;
}

/* button styles */
.btn {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-color: hsl(var(--n) / var(--tw-border-opacity));
  text-align: center;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-btn, 0.5rem);
  height: 3rem/* 48px */;
  padding-left: 1rem/* 16px */;
  padding-right: 1rem/* 16px */;
  font-size: 0.9rem;
  line-height: 1.25rem/* 20px */;
  line-height: 1em;
  min-height: 3rem/* 48px */;
  text-decoration-line: none;
  text-decoration-line: none;
  border-width: var(--border-btn, 1px);
  animation: button-pop var(--animation-btn, 0.25s) ease-out;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.btn:active:hover,
  .btn:active:focus {
  animation: none;
  transform: scale(var(--btn-focus-scale, 0.95));
}
.btn:hover,
  .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
}
.btn:focus-visible {
  outline: 2px solid hsl(var(--nf));
  outline-offset: 2px;
}    
.btn-primary {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;

  border-color: hsl(var(--p) / var(--tw-border-opacity));
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-primary:hover {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;

  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
}
.btn-outline.btn-primary {
  --tw-text-opacity: 1;
  --tw-bg-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
}
.btn-outline.btn-primary:hover,
.btn-outline.btn-primary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}

/* utility classes */
.capitalize {
  text-transform: capitalize;
}
.flex-100 {
  flex: 100%;
}
</style>
`;
template.innerHTML = `
 ${style}

  <div class="register">
    <div
      class="register__card register__card--colors register__card--size"
    >
      <form 
        id="register-form" 
        class="register__card__body"
      >
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text"> 
              <slot name="email">Email</slot>
            </span>
          </label>

          <input
            class="input-bordered input"
            name="email"
            id="register-email"
            type="email"
            placeholder="email"
            required
          />
        </div>

        <div class="form-control" style="margin-top: 1rem/* 16px */;">
          <label class="label" for="password">
            <span class="label-text"> 
              <slot name="password">Password</slot>
            </span>
          </label>

          <input
            class="input-bordered input"
            name="password"
            id="register-password"
            type="password"
            placeholder="password"
            pattern="[a-zA-Z0-9]{8,}"
            title="Check your password"
            required
          />

          <label class="label">
            <span class="label-text">
              Password must be at least 8 characters contains A-Z or a-z
              or numbers.
            </span>
          </label>
        </div>
        
        <div class="form-control form-action">
          <button
            type="submit"
            id="register-action"
            class="btn-outline btn-primary btn flex-100 capitalize"
          >
            Register
          </button>
          <button
            type="button"
            id="login-action"
            class="btn-primary btn flex-100 capitalize"
          >
            Login
          </button>
        </div>

        <label class="label">
          <span id="register-error" class="label-text" style="color: red">
            <!-- handle error messages from related method -->
          </span>
        </label>
      </form>
    </div>
  </div>
`;

export default template;
