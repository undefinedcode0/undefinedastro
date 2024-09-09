<script>
  import Nav from "./Nav.svelte";

  const links = [
    { href: "/", text: "Home" },
  ];
</script>

<Nav {links} />

<main class="tui-main">
  <slot />
</main>

<footer class="tui-footer">
  <p>Made with <span class="tui-heart">&#10084;</span> by undefinedcode.</p>
</footer>

<style>
  .tui-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    font-family: 'DM Mono', monospace;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    width: 100%;
  }

  .tui-footer {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
    text-align: center;
    padding: 10px;
    width: 100%;
    border-top: 1px solid var(--primary-color);
  }

  .tui-heart {
    color: var(--primary-color);
    animation: blink 1.5s infinite alternate;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.5;
    }
  }
</style>
